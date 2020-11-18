import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import java.io.IOException;

/**
 * A:1.0    B   C
 * A:0.333
 * A:0.444
 * =>
 * A:1.777  B   C
 * 1.777 - 1
 */
public class MyReducer extends Reducer<Text, Text, Text, Text>{

    @Override
    protected void reduce(Text key, Iterable<Text> values, Context context)
            throws IOException, InterruptedException {
        Node source= null;
        double weight = 0;
        for (Text text : values) {
            Node node = new Node(text.toString());
            if (node.unserialize()) {
                if (source == null) {
                    source = node;
                }
                if (node.isChain()) {
                    source = node;
                } else {
                    weight += node.getWeight();
                }                
            }
        }
        weight = (1 - Const.Q) / Const.TOTAL + Const.Q * weight;
        
        double d = weight - source.getWeight();
        source.setWeight(weight);
        int j=(int)( d*1000.0);
        j=Math.abs(j);
        System.out.println(j);
        context.getCounter(RunJob.Mycounter.my).increment(j);
        context.write(new Text(source.toString()), new Text(""));        
    }
}