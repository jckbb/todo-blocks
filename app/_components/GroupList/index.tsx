import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";
import { Task, TodoGroup } from "@/app/_machines/taskMachine";
import GroupItem from "./components/GroupItem";

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
  const renderGroupItem = ({ item, index, section }) => (
    <GroupItem
      onDone={() => {
        onToggleDoneTask({ groupName: section.name, taskIndex: index });
      }}
      item={item}
      section={section}
    />
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
