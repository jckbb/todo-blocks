import SegmentedList from "@/app/_components/SegmentedList";
import { Group } from "@/app/_machines/taskMachine";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CreateGroup from "../CreateGroup";
import styles from "./styles";

interface Props {
  forceCreate: boolean;
  groups: Group[];
  onSelect: (group: Group) => void;
}

const GroupField = ({ groups, forceCreate, onSelect }: Props) => {
  const [groupMode, setGroupMode] = useState<"select" | "create">("select");

  return (
    <View style={{ minHeight: 100 }}>
      {forceCreate || groupMode === "create" ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setGroupMode("select")}
          >
            <Text>{"<="}</Text>
          </TouchableOpacity>
          <CreateGroup onChange={(group) => onSelect(group)} />
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.switchButton}
            onPress={() => setGroupMode("create")}
          >
            <Text>{"+"}</Text>
          </TouchableOpacity>
          <SegmentedList
            options={groups}
            onChange={(group) => onSelect(group)}
          />
        </View>
      )}
    </View>
  );
};

export default GroupField;
