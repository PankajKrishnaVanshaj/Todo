// src/styles/styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#3498db", // Header color
  },
  input: {
    height: 40,
    borderColor: "#3498db",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    elevation: 2,
  },
  todoItem: {
    backgroundColor: "#f7f7f7",
    margin: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#333",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    flexWrap: "wrap",
    minWidth: 300,
  },
  todoText: {
    fontSize: 18,
    color: "#333",
    marginVertical: 10,
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 3,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#e74c3c",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 7,
  },
  editInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    elevation: 2,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    padding: 10,
  },
  menuModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuContent: {
    backgroundColor: "#3498db",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  closeMenuButton: {
    marginTop: 20,
    backgroundColor: "#2c3e50",
    padding: 10,
    borderRadius: 8,
  },
  closeMenuText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});
