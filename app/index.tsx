import { Link } from 'expo-router';
import { Image, StyleSheet, Pressable } from 'react-native';
import { View ,Text } from 'react-native';
import Subscription from './Subscription';

export default function HomeScreen() {
  return (
    <View style = {styles.container}>
      <View style={styles.desc}>
        <Image source={require('@/assets/images/iphone15plus.jpg')} style = {{margin :20, marginTop : 30}} />
        <Text style = {{fontSize : 20, margin : 20, flex : 1 , marginTop : 120}}>Apple iPhone 15 Plus (Pink, 128 GB)</Text>
      </View>
      <View style = {{flexDirection : 'row'}}>
        <Link href='/productList' style = {styles.link} asChild>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>View Product</Text>
          </Pressable>
        </Link>
        <Link href='/Subscription' style = {styles.link} asChild>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>Subscription</Text>
          </Pressable>
        </Link>
      </View>
      <View style={{marginTop : 20}}>
        <Link href={'/Wallet'} style = {styles.link} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Wallet</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    fontSize : 42,
    flex : 1,
  },
  text :{
    color : 'black',
    fontSize : 42
  },
  link : {
    fontSize : 42,
    color : 'white',
    textAlign : 'center',
    padding : 4,
    backgroundColor : 'black' 
  },
  button:{
    height : 60,
    justifyContent : 'center',
    padding : 6,
    borderRadius : 20,
    width : 150,
    marginLeft : 20
  },
  buttonText:{
    fontSize:16,
    color : 'white',
    fontWeight : 'bold',
    textAlign:'center'
  },
  desc:{
    flexDirection : 'row'
  }
});
