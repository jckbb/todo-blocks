import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupList from "./components/GroupList";

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});

const dummyGroups = [
  {
    title: "food",
    data: [{ task: "wholefoods run" }, { task: "fish" }],
    color: "#7bed9f",
  },
  {
    title: "errands",
    data: [{ task: "walk dog" }, { task: "takeout trash" }],
    color: "#70a1ff",
  },
  {
    title: "other",
    data: [{ task: "drink water" }],
  },
];

const Todo = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <GroupList groups={dummyGroups} />
    </SafeAreaView>
  );
};

export default Todo;
