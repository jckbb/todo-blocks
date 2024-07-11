import React from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

const GroupListHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.navigateToTodoButton}>
        <Link style={styles.navigateToTodoLink} href="/createTodoModal">
          todo
        </Link>
      </View>
    </View>
  );
};

export default GroupListHeader;
