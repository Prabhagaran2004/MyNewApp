import { Link } from 'expo-router';
import { Image, StyleSheet, Pressable } from 'react-native';
import { View ,Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style = {styles.container}>
      <Image source={require('@/assets/images/iphone15plus.jpg')} />
      <Link href='/productList' style = {styles.link} asChild>
        <Pressable style = {styles.button}>
          <Text style = {styles.buttonText}>View Product</Text>
        </Pressable>
      </Link>
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
    width : 150
  },
  buttonText:{
    fontSize:16,
    color : 'white',
    fontWeight : 'bold',
    textAlign:'center'
  }
});
