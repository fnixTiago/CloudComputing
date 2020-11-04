!apt-get update
!apt-get install openjdk-8-jdk-headless -qq > /dev/null
!wget -q http://archive.apache.org/dist/spark/spark-2.3.1/spark-2.3.1-bin-hadoop2.7.tgz
!tar xf spark-2.3.1-bin-hadoop2.7.tgz
!pip install -q findspark

import os
os.environ["JAVA_HOME"] = "/usr/lib/jvm/java-8-openjdk-amd64"
os.environ["SPARK_HOME"] = "/content/spark-2.3.1-bin-hadoop2.7"

!ls

import findspark
findspark.init()

import pyspark
from pyspark.sql import SparkSession



### pageRank
import re
import sys
from operator import add

from pyspark.sql import SparkSession


from pyspark import SparkContext, SparkConf


def computeContribs(urls, rank):
    """Calculates URL contributions to the rank of other URLs."""
    num_urls = len(urls)
    for url in urls:
        yield (url, rank / num_urls)


def parseNeighbors(urls):
    """Parses a urls pair string into urls pair."""
    parts = re.split(r'\s+', urls)
    return parts[0], parts[1]



if __name__ == "__main__":
    # if len(sys.argv) != 3:
    #     print("Usage: pagerank <file> <iterations>", file=sys.stderr)
    #     sys.exit(-1)

#     print("WARN: This is a naive implementation of PageRank and is given as an example!\n" +
#           "Please refer to PageRank implementation provided by graphx",
#           file=sys.stderr)

#     # Initialize the spark context.
#     spark = SparkSession\
#         .builder\
#         .appName("PythonPageRank")\
#         .getOrCreate()

    # Loads in input file. It should be in format of:
    #     URL         neighbor URL
    #     URL         neighbor URL
    #     URL         neighbor URL
    #     ...


    print("ANTES DE ENTRAR AL sc..........")
    
    sc = SparkContext()

    lines = sc.textFile("/content/links.txt")
    # lines = sc.textFile("/content/links.txt").rdd.map(lambda r: r[0])
    # lines = spark.read.text(sys.argv[1]).rdd.map(lambda r: r[0])


    # Loads all URLs from input file and initialize their neighbors.
    links = lines.map(lambda urls: parseNeighbors(urls)).distinct().groupByKey().cache()

    # Loads all URLs with other URL(s) link to from input file and initialize ranks of them to one.
    ranks = links.map(lambda url_neighbors: (url_neighbors[0], 1.0))

    # Calculates and updates URL ranks continuously using PageRank algorithm.
    # for iteration in range(int(sys.argv[2])):
    for iteration in range(25):
        # Calculates URL contributions to the rank of other URLs.
        contribs = links.join(ranks).flatMap(
            lambda url_urls_rank: computeContribs(url_urls_rank[1][0], url_urls_rank[1][1]))

        # Re-calculates URL ranks based on neighbor contributions.
        ranks = contribs.reduceByKey(add).mapValues(lambda rank: rank * 0.85 + 0.15)

    # Collects all URL ranks and dump them to console.
    with open('/content/ranks.txt', 'w') as writefile:
      for (link, rank) in ranks.collect():
          print("%s has rank: %s." % (link, rank))
          writefile.write(str(link) + " " + str(rank) + "\n")

    # ranks.saveAsTextFile("/content/ranks2.txt")
    ranks.coalesce(1).saveAsTextFile("/content/ranks2.csv")
    sc.stop()