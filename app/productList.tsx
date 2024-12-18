import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetails = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <View style={styles.item}>
        <Text style={styles.label}>Product:</Text>
        <Text style={styles.value}>{product.name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{product.description}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{product.location}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{product.date}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Pay:</Text>
        <Text style={styles.value}>${product.pay}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{product.status}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Product Link:</Text>
        <Link href="https://www.flipkart.com/apple-iphone-15-plus-blue-128-gb/p/itm4022c14383050?pid=MOBGTAGPE4F2HAW7&lid=LSTMOBGTAGPE4F2HAW7NDYSPY&marketplace=FLIPKART&q=iphone+15+plus&store=tyy%2F4io&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=organic&iid=7d228bed-d718-4e1d-9a61-19c30d45f19e.MOBGTAGPE4F2HAW7.SEARCH&ppt=hp&ppn=homepage&ssid=1e1vujwzao0000001734432194180&qH=72d286a378c732d0">Touch Here</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
  },
  value: {
    flex: 1,
    color: '#555',
  },
});

export default function App() {
  const sampleProduct = {
    name: 'Iphone 15 plus',
    description: 'A High End Mobile gaming smartphone',
    count: 10,
    location: 'Warehouse A',
    date: '2024-12-16',
    pay: 1200,
    status: 'Delivered',
  };

  return <ProductDetails product={sampleProduct} />;
}