import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList , TouchableOpacity , Pressable} from "react-native";
import { TextInput } from "react-native";

const Subscription = () => {
  const [product, setProduct] = useState([
    { id: 1, title: "IPhone 15", price: 899 },
    { id: 2, title: "IPhone 15 Plus", price: 1099 },
    { id: 3, title: "IPhone 15 Pro", price: 1399 },
    { id: 4, title: "IPhone 15 Pro Max", price: 1699 },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([])
  const [delivery, setDelivery] = useState([])
  const [vacationDates, setvacationDates] = useState({start: '',end:''})

  useEffect(()=>{
    calculateDelivery()
  },[selectedProducts, vacationDates])

  const handleVacation = ( name , value ) => {
    setvacationDates(
    (prev) => ({...prev , [name] : value})
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

  return (
    <View style = {styles.container}>
      <View>
        <Text style={styles.headerText}>Select Product</Text>
        <FlatList
          data={product}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.productItem,
                selectedProducts.includes(item) && styles.selectedProduct,
              ]}
              onPress={() => handleProductSelection(item)}
            >
              <Text>
                {item.title} (${item.price})
              </Text>
            </Pressable>
          )}
        />
      </View>
      <View>
        <Text style={styles.headerText}>Select Vacation Dates</Text>
        <TextInput
            style = {styles.input} 
            placeholder="Start Date (DD:MM:YYYY)"
            value={vacationDates.start}
            onChangeText={(text) => handleVacation("start" , text)}
        />
        <TextInput 
            style = {styles.input}
            placeholder="End Date (DD:MM:YYYY)"
            value={vacationDates.end}
            onChangeText={(text) => handleVacation("start" , text)}
        />
      </View>
      <View>
        <Text style={styles.headerText}>Delivery Schedule</Text>
        <FlatList 
          data={delivery}
          keyExtractor={(item, index) => item.toString()}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
      <Button title="Submit" onPress={() => alert("submitted successfully")} />
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        margin :20
    },
    headerText: {
    fontSize: 25,
    fontWeight: "bold",
    },
    productItem: {
      padding: 15,
      marginVertical: 5,
      backgroundColor: "#e0e0e0",
      borderRadius: 10,
      width : 300
    },
    selectedProduct: {
      backgroundColor: "#989898",
    },
    productText: {
      fontSize: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
      width: 300
    },
    scheduleItem: {
      padding: 10,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
  });
  

export default Subscription;
