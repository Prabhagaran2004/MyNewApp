import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, Image } from 'react-native';

const records = [
  { id: '1', status: 'inprogress', description: [{itemName: 'Iphone 15 plus',itemPrice: 'Rs.64,999',}] },
  { id: '2', status: 'accepted', description: [{itemName: 'Oneplus 12R',itemPrice: 'Rs.45,999',}] },
  { id: '3', status: 'rejected', description: [{itemName: 'Iphone 14 Pro Max',itemPrice: 'Rs.1,45,9999',}] },
  { id: '4', status: 'payment pending', description: [{itemName: 'Redmagic 10 Pro',itemPrice: 'Rs.67,999',}] },
  { id: '5', status: 'paid', description: [{itemName: 'Moto Edge 40 Neo',itemPrice: 'Rs.22,999',}] },
];

const getStatusStyle = (status) => {
  switch (status.toLowerCase()) {  
    case 'inprogress':
      return styles.inprogress;
    case 'accepted':
      return styles.accepted;
    case 'rejected':
      return styles.rejected;
    case 'payment pending':
      return styles.paymentPending;
    case 'paid':
      return styles.paid;
    default:
      return styles.default;
  }
};

const getStatusImage = (status) => {
  switch (status.toLowerCase()) {
    case 'inprogress':
      return <Image source={require('@/assets/images/ip15.jpg')} style = {{height : 60 , width : 40}} />
    case 'accepted':
      return <Image source={require('@/assets/images/op12.png')} style = {{height : 60 , width : 50}} />
    case 'rejected':
      return <Image source={require('@/assets/images/ip14.png')} style = {{height : 60 , width : 40}} />
    case 'payment pending':
      return <Image source={require('@/assets/images/rm10.png')} style = {{height : 60 , width : 40}} />
    case 'paid':
      return <Image source={require('@/assets/images/me40.png')} style = {{height : 60 , width : 40}} />
    default:
      return null
  }    
}

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'inprogress':
      return <Image source={require('@/assets/images/processing-time.png')} style = {{height : 30 , width : 30}} />
    case 'accepted':
      return <Image source={require('@/assets/images/accepted.png')} style = {{height : 30 , width : 30}} />
    case 'rejected':
      return <Image source={require('@/assets/images/cross-button.png')} style = {{height : 30 , width : 30}} />
    case 'payment pending':
      return <Image source={require('@/assets/images/money.png')} style = {{height : 30 , width : 30}} />
    case 'paid':
      return <Image source={require('@/assets/images/paid.png')} style = {{height : 30 , width : 30}} />
    default:
      return null
  }    
}

const getStatusTextColor = (status) => {
  switch (status.toLowerCase()) {
    case 'rejected':
      return styles.lightText;
    case 'accepted':
      return styles.lightText;
    default:
      return styles.darkText;
  }
};


const RecordItem = ({item}) => (
  <View style={[styles.recordItem, getStatusStyle(item.status)]}>
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        {getStatusImage(item.status)}
      </View>
      <Text style={styles.recordText}>
        {item.description.map((desc, index) => (
          <View key={index}>
            <Text style = {{fontSize : 20, fontWeight: 'semibold'}} >{desc.itemName}</Text>
            <Text>{desc.itemPrice}</Text>
          </View>
        ))}
      </Text>
      <View style={styles.iconContainer}>
        {getStatusIcon(item.status)}
      </View>
      <Text style={[styles.statusText, getStatusTextColor(item.status)]}>
        {item.status.toUpperCase()}
      </Text>
    </View>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Text style={styles.header}>Records</Text>
      <FlatList
        data={records}
        renderItem={({ item }) => <RecordItem item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  recordItem: {
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
    textTransform: 'uppercase',
  },
  iconContainer: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    marginRight: 8,
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#333',
  },
  inprogress: {
    backgroundColor: '#fff9c4',  // Lighter yellow
  },
  accepted: {
    backgroundColor: '#66bb6a',  // Green
  },
  rejected: {
    backgroundColor: '#ef5350',  // Red
  },
  paymentPending: {
    backgroundColor: '#ffb74d',  // Orange
  },
  paid: {
    backgroundColor: '#64b5f6',  // Blue
  },
  default: {
    backgroundColor: '#e0e0e0',  // Grey
  },
});

export default App;