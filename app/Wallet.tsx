// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const WalletApp = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [amount, setAmount] = useState('');
  const [newAMount,setNewAmount] = useState('')
  const [lowBalanceThreshold, setLowBalanceThreshold] = useState(200);

  // Add money to wallet
  const handleAddMoney = () => {
    const addAmount = parseFloat(amount);
    if (!addAmount || addAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount to add.');
      return;
    }
    setBalance(balance + addAmount);
    setAmount('');
    Alert.alert('Success', `₹${addAmount} added to your wallet.`);
  };

  // Set low-balance notification threshold
  const handleSetThreshold = () => {
    const threshold = parseFloat(newAMount);
    if (!threshold || threshold <= 0) {
      Alert.alert('Invalid Threshold', 'Please enter a valid threshold.');
      return;
    }
    setLowBalanceThreshold(threshold);
    setAmount('');
    Alert.alert('Success', `Low-balance threshold set to ₹${threshold}.`);
  };

  // Check for low balance
  const checkLowBalance = () => {
    if (balance < lowBalanceThreshold) {
      Alert.alert('Low Balance Alert', `Your balance is below ₹${lowBalanceThreshold}.`);
    }
    else{
        Alert.alert(`Your balance is above ₹${lowBalanceThreshold}.`);
    }
  };

  const currentBalance = () =>{
    Alert.alert('Your Current Balance is',`Rs.${balance}`)
  }

  return (
    <View style={styles.container}>
      {/* Balance Display */}
      <Text style={styles.balanceText}>Wallet</Text>

      {/* Add Money Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Add Money</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Add Money" onPress={handleAddMoney} />
      </View>

      {/* Set Low-Balance Notification Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Set Low-Balance</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the amount"
          keyboardType="numeric"
          value={newAMount}
          onChangeText={setNewAmount}
        />
        <Button title="Set Low-Balance Threshold" onPress={handleSetThreshold} />
      </View>

      {/* Check Low Balance Button */}
      <View style={styles.section}>
        <Button title="Check Low Balance Threshold" onPress={checkLowBalance} />
      </View>
      <View style={styles.section}>
        <Button title="Current Balance" onPress={currentBalance} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    width : 300
  },
});

export default WalletApp;
