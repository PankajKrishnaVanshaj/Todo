// src/components/TodoItem.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(todo.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onEdit(todo.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <View style={styles.todoItem}>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.editInput}
            value={editedTitle}
            onChangeText={(text) => setEditedTitle(text)}
          />
          <Button onPress={handleSave} title="Save" />
        </View>
      ) : (
        <View style={styles.todoContainer}>
          <Text style={{ flex: 1 }}>{todo.title}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleEdit} style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default TodoItem;
