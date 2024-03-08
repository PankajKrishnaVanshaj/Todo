// src/screens/TodoApp.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
// import AdMobBanner from "react-native-admob"; // Import AdMobBanner
import TodoList from "../components/TodoList";
import { styles } from "../styles/styles";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      setTodos([
        ...todos,
        { id: Date.now(), title: newTodo, time: currentTime },
      ]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuPress = (menuItem) => {
    // Add functionality for each menu item here
    console.log(`Menu item pressed: ${menuItem}`);
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Pk Todo </Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
      {/* <AdMobBanner
        adSize="smartBannerPortrait"
        adUnitID="your-admob-banner-id" // Replace with your actual AdMob banner ad unit ID
        testDevices={[AdMobBanner.simulatorId]} // Add your test devices here
        onAdFailedToLoad={(error) => console.error(error)}
      /> */}
      <Modal visible={isMenuVisible} transparent animationType="slide">
        <View style={styles.menuModal}>
          <View style={styles.menuContent}>
            <TouchableOpacity onPress={() => handleMenuPress("Option 1")}>
              <Text style={styles.menuItem}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuPress("Option 2")}>
              <Text style={styles.menuItem}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMenuPress("Option 3")}>
              <Text style={styles.menuItem}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleMenu}
              style={styles.closeMenuButton}
            >
              <Text style={styles.closeMenuText}>Close Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
        placeholder="Enter a new todo"
      />
      <Button onPress={addTodo} title="Add Todo" />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </View>
  );
};

export default TodoApp;
