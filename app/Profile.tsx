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
import { MaterialIcons } from "@expo/vector-icons"; // for a new dropdown icon

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
      {/* User Info Card */}
      <View style={[styles.card, styles.userInfoCard]}>
        <Text style={styles.userInfoText}>John Doe</Text>
        <Text style={styles.userInfoContact}>+1 (234) 567-890</Text>
      </View>

      {/* List of Sections */}
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
            <MaterialIcons
              name={activeDropdown === title ? "expand-less" : "expand-more"}
              size={24}
              color="#7e57c2" // Light purple color for the dropdown icon
            />
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

      {/* Footer with Logout and Delete Account */}
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
    backgroundColor: "#f3e5f5", // Light purple background color
    padding: 20,
  },
  userInfoCard: {
    marginBottom: 20,
    padding: 25,
    backgroundColor: "#fbe9e7", // Cream white card background
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
  },
  userInfoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6a1b9a", // Dark purple color
  },
  userInfoContact: {
    fontSize: 16,
    color: "#8e24aa", // Lighter purple color
    marginTop: 8,
  },
  card: {
    marginBottom: 20,
    padding: 18,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  cardMobile: {
    padding: 14,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#7e57c2", // Light purple color for title
  },
  dropdownIndicator: {
    fontSize: 20,
    color: "#7e57c2", // Matching color for dropdown icon
  },
  cardContent: {
    marginTop: 12,
    paddingTop: 8,
  },
  cardDetails: {
    fontSize: 14,
    color: "#455a64", // Darker gray for the details text
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#7e57c2", // Light purple button color
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonMobile: {
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
  footer: {
    paddingTop: 16,
  },
  logoutButton: {
    backgroundColor: "#ef5350", // Red button for logout
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 14,
  },
  deleteButton: {
    backgroundColor: "#e57373", // Lighter red for delete account button
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutButtonMobile: {
    paddingVertical: 12,
  },
  deleteButtonMobile: {
    paddingVertical: 12,
  },
});

export default ProfileScreen;
