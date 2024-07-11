import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import GroupListHeader from "./_components/GroupList/GroupListHeader";
import GroupList from "./_components/GroupList";

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

const Home = () => {
  const renderListHeader = () => <GroupListHeader />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <GroupList listHeader={renderListHeader} groups={dummyGroups} />
    </SafeAreaView>
  );
};

export default Home;
