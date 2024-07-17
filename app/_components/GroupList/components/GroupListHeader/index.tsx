import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

const GroupListHeader = () => {
  const [isPressed, setPressed] = useState(false);

  const handlePressedIn = (pressed: boolean) => {
    setPressed(pressed);
  };

  return (
    <View style={styles.header}>
      <Link href="/createTodoModal" asChild>
        <Pressable
          onPressIn={() => handlePressedIn(true)}
          onPressOut={() => handlePressedIn(false)}
        >
          <View
            style={[styles.navigateToTodoButton, isPressed && { opacity: 1 }]}
          >
            <Text style={styles.buttonLabel}>{"todo"}</Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
};

export default GroupListHeader;
