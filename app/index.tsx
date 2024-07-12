import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupListHeader from "./_components/GroupList/GroupListHeader";
import GroupList from "./_components/GroupList";
import { useSelector } from "@xstate/react";
import { globalTaskActor } from "./_layout";
import { TodoGroup } from "./_machines/taskMachine";

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
});

const Home = () => {
  const groups = useSelector(globalTaskActor, (snapshot) => {
    const groupKeys = Object.keys(snapshot.context.groupTasks);
    let groupSections: TodoGroup[] = [];
    groupKeys.forEach((groupKey) => {
      if (snapshot.context.groupTasks[groupKey].data.length) {
        const group = snapshot.context.groupTasks[groupKey];
        groupSections = [
          ...groupSections,
          {
            ...group,
            name: group.name,
          },
        ];
      }
    });
    return groupSections;
  });

  const renderListHeader = () => <GroupListHeader />;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <GroupList
        onToggleDoneTask={(value) =>
          globalTaskActor.send({ type: "toggleTask", value })
        }
        listHeader={renderListHeader}
        groups={groups}
      />
    </SafeAreaView>
  );
};

export default Home;
