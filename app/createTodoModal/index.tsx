import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { globalTaskActor } from "../_layout";
import GroupField from "./_components/GroupField";
import { useSelector } from "@xstate/react";
import AddTaskButton from "./_components/AddTaskButton";
import TaskTextArea from "./_components/TaskTextArea";
import { Group } from "../_machines/taskMachine";

const CreateTodoModal = () => {
  const groups = useSelector(globalTaskActor, (snapshot) => {
    const groupTasks = snapshot.context.groupTasks;
    const groupKeys = Object.keys(groupTasks);
    return (groupKeys || []).map((groupKey) => ({
      name: groupTasks[groupKey].name,
      color: groupTasks[groupKey].color,
    }));
  });
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState<Group>();
  const [description, setDescription] = useState<string | undefined>();

  return (
    <View style={{ flex: 1, gap: 32 }}>
      <View style={{ flexGrow: 1, maxHeight: 120 }}>
        <Text style={{ paddingTop: 16, fontSize: 24, textAlign: "center" }}>
          {"New Task"}
        </Text>
        <AddTaskButton
          onPress={() => {
            if (description !== undefined && selectedGroup !== undefined) {
              globalTaskActor.send({
                type: "addTask",
                task: {
                  group: selectedGroup,
                  description,
                },
              });
              router.dismiss();
            }
          }}
        />
      </View>
      <GroupField
        groups={groups}
        forceCreate={!groups.length}
        onSelect={setSelectedGroup}
      />
      <TaskTextArea
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
    </View>
  );
};

export default CreateTodoModal;
