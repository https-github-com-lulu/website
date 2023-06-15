import { Text, View } from 'react-native';
import styles from '../styles/HomeP.js';
import { db } from '../../firebase-config.js';
// import { FlatGrid } from 'react-native-super-grid';

export default function HomeP() {
  
  return (
    <View style={styles.container}>
    {/* <FlatGrid
      itemDimension={130}
      data={ <View style={{width:100, height: 100, backgroundColor:'purple'}}>
      </View>}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )} */}
    {/* /> */}
        <View style={styles.conjuntoProd}>
            <View style={{width:100, height: 100, backgroundColor:'purple'}}>
            </View>
            <View style={{width:100, height: 100, backgroundColor:'blue'}}>
            </View>
            <View style={{width:100, height: 100, backgroundColor:'black'}}>
            </View>
        </View>
      <Text>HomeP</Text>
    </View>
  );
}