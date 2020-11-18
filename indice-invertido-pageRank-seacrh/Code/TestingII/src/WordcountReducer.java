

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

public class WordcountReducer extends Reducer<Text, Text, Text, Text> {

	@Override
	public void reduce(final Text key, final Iterable<Text> values,
			final Context context) throws IOException, InterruptedException {
		
		Set<String> hash_Set = new HashSet<String>();
		for (Text value : values)
			hash_Set.add(value.toString());				

		StringBuilder stringBuilder = new StringBuilder();		
		for (String value : hash_Set)
			stringBuilder.append(value+ ",");

//		for (Text value : values) {
//			stringBuilder.append(value.toString());
//
//			if (values.iterator().hasNext()) {
//				stringBuilder.append(",");
//			}
//		}

		context.write(key, new Text(stringBuilder.toString()));
	}
}