import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function ProductInfo({ route }) {
    const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.materialText}>MATERIALS</Text>
      <View>
        <Image style={styles.shareImage} source={require('../assets/Export.png')} />
        <Text style={styles.description2}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <Image style={styles.bleach} source={require('../assets/Do Not Bleach.png')} />
        <Text style={styles.description3}>Do not use bleach</Text>
        <Image style={styles.tumbleDry} source={require('../assets/Do Not Tumble Dry.png')} />
        <Text style={styles.description4}>Do not tumble dry</Text>
        <Image style={styles.wash} source={require('../assets/Do Not Wash.png')} />
        <Text style={styles.description5}>Dry clean with tetrachloroethylene</Text>
        <Image style={styles.iron} source={require('../assets/Iron Low Temperature.png')} />
        <Text style={styles.description6}>Iron at a maximum of 110oC/230oF</Text>
        <View style={styles.line1} />
        <Image style={styles.shipping} source={require('../assets/Shipping.png')} />
        <Text style={styles.description7}>Free Flat Rate Shipping</Text>
        <Image style={styles.up} source={require('../assets/Up.png')} />
        <Text style={styles.description8}>Estimated to be delivered on</Text>
        <Text style={styles.date}>09/11/2021 - 12/11/2021.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 380,
    height: 470,
  },
  name: {
    fontSize: 24,
    marginVertical: 10,

  },
  description: {
    fontSize: 16,
    color: '#737373',
    marginVertical: 3,
  },
  price: {
    fontSize: 24,
    color: '#D18035',
    marginVertical: 3,
  },
  materialText:{
    fontSize: 16,
    marginVertical: 25,
    letterSpacing: 3
  },
  description2:{
    fontSize: 18,
    letterSpacing: 2,
    marginVertical: -30,
    color: '#737373',
  },
  shareImage:{
    left: 335,
    top: -55,
  },
  bleach:{
    top: 60,
    width: 30,
    height: 30,
  },
  description3:{
    fontSize: 19,
    marginVertical: 35,
    left: 50,
    color: '#737373',
  },
  tumbleDry:{
    width: 30,
    height: 30,
  },
  description4:{
    fontSize: 19,
    left: 50,
    color: '#737373',
    marginVertical: -25,
  },
  wash:{
    width: 30,
    height: 30,
    top: 55
  },
  description5:{
    fontSize: 19,
    left: 50,
    color: '#737373',
    marginVertical: 30,
  },
  iron:{
    width: 30,
    height: 30,
  },
  description6:{
    fontSize: 19,
    left: 50,
    color: '#737373',
    marginVertical: -25,
  },
  line1:{
    height: 1, 
    width: 360,
    backgroundColor: '#737373',
    marginVertical: 60,
  },
  shipping:{
    width: 30,
    height: 30,
    top: -40
  },
  description7:{
    fontSize: 19,
    left: 50,
    color: 'black',
    top: -65
  },
  up:{
    width: 30,
    height: 30,
    top: -90,
    left: 320,
  },
  description8:{
    fontSize: 19,
    left: 50,
    color: '#737373', 
    top: -95,
  },
  date:{
    fontSize: 19,
    left: 50,
    color: '#737373',
    top: -80,
  }
});
