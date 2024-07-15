import React from "react";
import {
  View,
  Text,
  SectionList,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import { Task, TodoGroup } from "@/app/_machines/taskMachine";

interface Props {
  groups: TodoGroup[];
  listHeader: () => React.JSX.Element;
  onToggleDoneTask: ({
    taskIndex,
    groupName,
  }: {
    taskIndex: number;
    groupName: TodoGroup["name"];
  }) => void;
}

const GroupList = ({ groups, listHeader, onToggleDoneTask }: Props) => {
  const renderGroupItem = ({
    item,
    index,
    section: { name, color },
  }: {
    item: Task;
    index: number;
    section: TodoGroup;
  }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        onToggleDoneTask({ groupName: name, taskIndex: index });
      }}
    >
      <View
        style={[
          styles.groupItem,
          color !== undefined && { backgroundColor: color },
        ]}
      >
        <View style={styles.item}>
          <View style={styles.itemStatus}>
            {item.done && <View style={styles.itemStatusDone} />}
          </View>
          <Text style={styles.taskDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const renderGroupHeader = ({
    section: { name: title, color },
  }: {
    section: TodoGroup;
  }) => (
    <View
      style={[
        styles.groupHeader,
        color !== undefined && { backgroundColor: color },
      ]}
    >
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const renderGroupFooter = ({
    section: { color },
  }: {
    section: TodoGroup;
  }) => (
    <View
      style={[
        styles.groupButt,
        color !== undefined && { backgroundColor: color },
      ]}
    />
  );

  return (
    <SectionList
      stickySectionHeadersEnabled={false}
      contentContainerStyle={styles.groupSectionContent}
      style={styles.groupSectionList}
      renderSectionHeader={renderGroupHeader}
      renderSectionFooter={renderGroupFooter}
      ListHeaderComponent={listHeader}
      sections={groups}
      renderItem={renderGroupItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default GroupList;
