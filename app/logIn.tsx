import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Login: React.FC = () => {
  const [loginType, setLoginType] = useState<string | null>(null);
  const [phoneOrEmail, setPhoneOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { width } = Dimensions.get("window");
  const isMobile = width <= 768;

  const handleLogin = () => {
    alert("Logged in successfully!");
  };

  const toggleDropdown = () => {
    setLoginType(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>

      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownBox}
          onPress={() => toggleDropdown()}
        >
          <Text style={styles.dropdownText}>
            {loginType ? loginType : "Select Login Type"}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#7e57c2" />
        </TouchableOpacity>
        {loginType === null && (
          <View style={styles.dropdownMenu}>
            {["User", "Admin", "Vendor", "Agent"].map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.dropdownOption}
                onPress={() => setLoginType(type)}
              >
                <Text style={styles.optionText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {loginType && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile or Email"
            value={phoneOrEmail}
            onChangeText={setPhoneOrEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e5f5",
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6a1b9a",
    textAlign: "center",
    marginBottom: 20,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ede7f6",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7e57c2",
  },
  dropdownText: {
    fontSize: 16,
    color: "#6a1b9a",
  },
  dropdownMenu: {
    backgroundColor: "#ede7f6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7e57c2",
    marginTop: 8,
    paddingVertical: 8,
  },
  dropdownOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d1c4e9",
  },
  optionText: {
    fontSize: 16,
    color: "#6a1b9a",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#7e57c2",
  },
  button: {
    backgroundColor: "#7e57c2",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Login;
