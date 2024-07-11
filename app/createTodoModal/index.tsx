import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import SegmentedList, { Option } from "../_components/SegmentedList";
import { useRouter } from "expo-router";

const dummyGroupNames: Option[] = [
  { label: "other" },
  { color: "#7bed9f", label: "food" },
  { color: "#70a1ff", label: "errands" },
];

const CreateTodoModal = () => {
  const router = useRouter();
  const [selectedGroup, setSelectedGroup] = useState(dummyGroupNames[0].label);
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, maxHeight: 120 }}>
        <Text style={{ paddingTop: 16, fontSize: 24, textAlign: "center" }}>
          {"New Task"}
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            right: 0,
          }}
          onPress={() => {
            router.dismiss();
          }}
        >
          <Text>{"Add"}</Text>
        </TouchableOpacity>
      </View>
      <SegmentedList
        options={dummyGroupNames}
        selected={selectedGroup}
        onChange={(groupName) => {
          setSelectedGroup(groupName);
        }}
      />
      <TextInput
        style={{
          minHeight: 120,
          padding: 16,
          marginHorizontal: 16,
          borderRadius: 16,
          backgroundColor: "lightgrey",
        }}
        placeholder="Enter task"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setTaskDescription(text)}
        value={taskDescription}
      />
    </View>
  );
};

export default CreateTodoModal;
