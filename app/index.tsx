import { Link } from "expo-router";
import { Image, StyleSheet, Pressable } from "react-native";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/iphone15plus.jpg")} />
      <Link href="/logIn" style={styles.link} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>login</Text>
        </Pressable>
      </Link>
      <Link href="/signUp" style={styles.link} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>signUp</Text>
        </Pressable>
      </Link>
      <Link href="/productList" style={styles.link} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>View Product</Text>
        </Pressable>
      </Link>

      {/* Profile Button */}
      <Link href="/Profile" style={styles.link} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    padding: 4,
    backgroundColor: "black",
    marginTop: 20,
  },
  button: {
    height: 60,
    justifyContent: "center",
    padding: 6,
    borderRadius: 20,
    width: 150,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
