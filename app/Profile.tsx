import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLogout = (): void => {
    alert("Logged out successfully!");
  };

  const handleDeleteAccount = (): void => {
    alert("Account deleted successfully!");
  };

  const toggleDropdown = (section: string): void => {
    setActiveDropdown((prev) => (prev === section ? null : section));
  };

  const { width } = Dimensions.get("window");
  const isMobile = width <= 768;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>

      {[
        { title: "Personal Details", navigateTo: "PersonalDetails" },
        { title: "Transactions", navigateTo: "Transactions" },
        { title: "Monthly Bills", navigateTo: "MonthlyBills" },
        { title: "Delivery Preferences", navigateTo: "DeliveryPreferences" },
        { title: "Language", navigateTo: "LanguagePreferences" },
        { title: "Contact Us", navigateTo: "ContactUs" },
        { title: "Address", navigateTo: "Address" },
      ].map(({ title, navigateTo }) => (
        <View key={title} style={[styles.card, isMobile && styles.cardMobile]}>
          <TouchableOpacity
            style={styles.cardHeader}
            onPress={() => toggleDropdown(title)}
          >
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.dropdownIndicator}>
              {activeDropdown === title ? "▲" : "▼"}
            </Text>
          </TouchableOpacity>
          {activeDropdown === title && (
            <View style={styles.cardContent}>
              <Text style={styles.cardDetails}>
                These are the details for {title}. Please review them carefully.
              </Text>
              <TouchableOpacity
                style={[styles.button, isMobile && styles.buttonMobile]}
                onPress={() => navigation.navigate(navigateTo)}
              >
                <Text style={styles.buttonText}>Proceed</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.logoutButton, isMobile && styles.logoutButtonMobile]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.deleteButton, isMobile && styles.deleteButtonMobile]}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2f3f5", // Vibrant background color
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#0d47a1", // Vibrant text color
  },
  card: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cardMobile: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1b5e20", // Vibrant green color
  },
  dropdownIndicator: {
    fontSize: 18,
    color: "#1b5e20", // Matching dropdown color
  },
  cardContent: {
    marginTop: 12,
  },
  cardDetails: {
    fontSize: 14,
    color: "#37474f", // Muted text color
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3b82f6", // Vibrant blue button color
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonMobile: {
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
  footer: {
    paddingTop: 16,
  },
  logoutButton: {
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: "#b91c1c",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  logoutButtonMobile: {
    paddingVertical: 10,
  },
  deleteButtonMobile: {
    paddingVertical: 10,
  },
});

export default ProfileScreen;
