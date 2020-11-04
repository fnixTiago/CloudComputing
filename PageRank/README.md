# PageRank usando EMR de AWS y Google Colab
Ruben Huanca M., Israel Pancca M.
04 Noviembre 2020


## Problema
Uno de los problemas que se generan en alumnos de últimos años es obtener una fuente confiable de información, en vista a que hay muchos autores que tienen una línea de investigación, hay otros autores que comparten esa misma línea y eso se ve mediante las referencias en sus artículos.


## Propuesta
Nuestra propuesta es utilizar el pageRank como herramienta para estudiantes que puedan obtener autores con una línea de investigación muy referenciada mediante el rank obtenido por el algoritmo PageRank. Además darles a conocer una alternativa gratuita como Google Colab, para los que no puedan acceder a un clúster de cualquier nube.

### Scrappy
Para generar la data utilizamos la herramienta \textit{lynx + cURL} que es utlizada para extraer información o URLs que contengan la url que se ingresa. En nuestro caso utilizamos la extracción de urls hasta el tercer nivel de la siguiente página [Greg Brockman](https://paperswithcode.com/author/greg-brockman) que contiene la vista de un autor de una página de que comparte papers con código, en el resultado obtuvimos un total de : 

- Primer nivel: **1** link que es la página ingresada.
- Segundo nivel: **17** links de la página padre.
- Tercer nivel: **390** links de los hijos del nivel 2.

Haciendo un total de **408** links únicos(nodos) y un total de **567** aristas entre los nodos. 
Para poder ver el gráfo generado de nuestro scrappy esta en el siguiente enlace
[Gráfo](scrappy/grafoLinks.pdf)
### PageRank 
Es un algoritmo utilizado para asignar de forma numérica la relevancia de los documentos (o páginas web) indexados por un motor de búsqueda.
## Resultados
Comparativa de PageRank usando EMR de AWS y Google Colab usando
un grafo de 408 p´aginas y 567 aristas.
A continuaci´on mostraremos los resultados de los Ranks obtenidos de las
408 p´aginas

| | | Recursos | Características | #Tiempo (seg) |
| :---: | :---: | :---: | :---: |
|EMR de AWS| Seconds | 301 | 283 |
|Google Colab| Seconds | 301 | 283 |


## Source

Los códigos del desarrollo lo pueden ver en la carpeta code donde estarán los 2 códigos: 
-   pagerank_colab_SaveRDD.py : Código para Google colab
-   pagerank_sparkOriSave.py : Código para EMR AWS

