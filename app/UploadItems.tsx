import { View, Text, TouchableOpacity,Image , StyleSheet, TextInput, Pressable, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'


const UploadItems = () => {

    const [itemName , setItemName] = useState('')
    const [itemPrice , setItemPrice] = useState('')
    const [itemDesc , setItemDesc] = useState('')
    const [itemQuantity , setItemQuantity] = useState('')
    const [image , setImage] = useState(null)

    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const Quality = [
      'Good',
      'Bad',
      'Mixed',
    ];

    const filteredItems = Quality.filter(items =>
      items.toLowerCase().includes(inputValue.toLowerCase())
    );

    const handleSelect = (items) => {
      setInputValue(items);
      setShowOptions(false);
    };


    const handleUpload = () => {
        if (!itemName || !itemPrice || !itemQuantity || !image ) {
            Alert.alert("Enter all the fields...!")
            return
        }
        else{
            Alert.alert("Successfully Uploaded!")
        }
    }

    

  return (
    <ScrollView>
    <View  style={styles.container}>
      <View>
        <Text style={styles.header}>Add New Item</Text>
        
        <TouchableOpacity 
          style={styles.imageButton}
          activeOpacity={0.7}
        >
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <View>
                <Image source={require('@/assets/images/camera.png')} style={{width : 55, height : 55}} />
              </View>
              <Text style={styles.placeholderText}>Tap to Upload Image</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Item Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter item name"
            value={itemName}
            onChangeText={setItemName}
            placeholderTextColor="#999"
          />
        </View>

        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quantity"
              value={itemQuantity}
              onChangeText={setItemQuantity}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter price"
              value={itemPrice}
              onChangeText={setItemPrice}
              keyboardType="decimal-pad"
              placeholderTextColor="#999"
            />
          </View>
          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Quality</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Quality"
              placeholderTextColor="#999"
            />
          </View> */}
          <View style = {styles.inputContainer}>
            <Text style={styles.label}>Choose Quality</Text>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
                setShowOptions(true);
              }}
              onFocus={() => setShowOptions(true)}
              placeholder="Type or select Quality"
            />
            
            {showOptions && (
              <View style={styles.dropdown}>
                <FlatList
                  data={filteredItems}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.option}
                      onPress={() => handleSelect(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Category"
              placeholderTextColor="#999"
            />
          </View>
          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter price"
              value={itemDesc}
              onChangeText={setItemDesc}
              placeholderTextColor="#999"
            />
          </View> */}
          <View>
          <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.desc}
              placeholder="Enter your description here..."
              value={itemDesc}
              onChangeText={setItemDesc}
              multiline
              numberOfLines={4}
              textAlignVertical="top" // Aligns text to the top for multiline input
            />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleUpload}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>Upload Item</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop : 0
    },
    header: {
      fontSize: 28,
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: 24,
      textAlign: 'center',
    },
    imageButton: {
      width: '100%',
      height: 200,
      marginBottom: 24,
      borderRadius: 16,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    placeholder: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f2f5',
    },
    placeholderText: {
      color: '#666',
      fontSize: 16,
      fontWeight: '500',
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      fontWeight: '600',
      color: '#666',
      marginBottom: 8,
      marginLeft: 4,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 12,
      borderWidth: 1,
      padding: 12,
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: -8,
    },
    halfWidth: {
      flex: 1,
      marginHorizontal: 8,
    },
    submitButton: {
      backgroundColor: '#4a90e2',
      paddingVertical: 16,
      borderRadius: 12,
      alignItems: 'center',
      marginTop: 8,
      shadowColor: '#4a90e2',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    submitText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    desc : {
      backgroundColor: '#fff',
      borderRadius: 12,
      borderWidth: 1,
      padding: 12,
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
      height : 150
    }
  })

export default UploadItems