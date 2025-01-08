import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable, Image } from "react-native";
import { TextInput } from "react-native";

const Subscription = () => {
  const [product, setProduct] = useState([
    { id: 1, title: "IPhone 15", price: 899, image: require('@/assets/images/ip15.jpg') },
    { id: 2, title: "Oneplus 12R", price: 1099, image: require('@/assets/images/op12.png') },
    { id: 3, title: "Redmagic 10 Pro", price: 1399, image: require('@/assets/images/rm10.png') },
    { id: 4, title: "IPhone 14 Pro Max", price: 1699, image: require('@/assets/images/ip14.png') },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [vacationDates, setvacationDates] = useState({ start: '', end: '' });

  useEffect(() => {
    calculateDelivery()
  }, [selectedProducts, vacationDates])

  const handleVacation = (name, value) => {
    setvacationDates(
      (prev) => ({ ...prev, [name]: value })
    )
  }

  const calculateDelivery = () => {
    const today = new Date();
    const schedule = [];
    for (let i = 0; i < 5; i++) {
      const deliveryDate = new Date(today);
      deliveryDate.setMonth(deliveryDate.getMonth() + i);

      if (
        vacationDates.start &&
        vacationDates.end &&
        deliveryDate >= new Date(vacationDates.start) &&
        deliveryDate <= new Date(vacationDates.end)
      ) {
        continue;
      }
      schedule.push(deliveryDate.toDateString());
    }
    setDelivery(schedule);
  };

  const handleProductSelection = (product) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    )
  }

  const renderProductItem = ({ item }) => (
    <Pressable
      style={[
        styles.productItem,
        selectedProducts.includes(item) && styles.selectedProduct,
      ]}
      onPress={() => handleProductSelection(item)}
    >
      <View style={styles.productContent}>
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </View>
    </Pressable>
  );

  const renderScheduleItem = ({ item }) => (
    <Text style={styles.scheduleItem}>{item}</Text>
  );

  const sections = [
    { type: 'header', title: 'Select Product' },
    { type: 'products', data: product },
    { type: 'header', title: 'Select Vacation Dates' },
    { type: 'dates' },
    { type: 'header', title: 'Delivery Schedule' },
    { type: 'schedule', data: delivery },
    { type: 'submit' }
  ];

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'header':
        return <Text style={styles.headerText}>{item.title}</Text>;
      case 'products':
        return (
          <View style={styles.section}>
            <FlatList
              data={item.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderProductItem}
              contentContainerStyle={styles.productList}
            />
          </View>
        );
      case 'dates':
        return (
          <View style={styles.section}>
            <TextInput
              style={styles.input}
              placeholder="Start Date (DD:MM:YYYY)"
              value={vacationDates.start}
              onChangeText={(text) => handleVacation("start", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="End Date (DD:MM:YYYY)"
              value={vacationDates.end}
              onChangeText={(text) => handleVacation("end", text)}
            />
          </View>
        );
      case 'schedule':
        return (
          <View style={styles.section}>
            <FlatList
              data={item.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderScheduleItem}
              contentContainerStyle={styles.scheduleList}
              scrollEnabled={false}
            />
          </View>
        );
      case 'submit':
        return (
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => alert("Submitted successfully...!")}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: '#333',
  },
  productList: {
    paddingVertical: 8,
  },
  productItem: {
    marginBottom: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedProduct: {
    backgroundColor: "#e0e0e0",
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: 16,
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 15,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  scheduleList: {
    paddingVertical: 8,
  },
  scheduleItem: {
    padding: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    color: '#444',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Subscription;