import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";

type Task = {
  task: string;
};

type TodoGroup = {
  title: string;
  data: Task[];
  color?: string;
};

interface Props {
  groups: TodoGroup[];
  listHeader: () => React.JSX.Element;
}

const GroupList = ({ groups, listHeader }: Props) => {
  const renderGroupItem = ({
    item,
    section: { color },
  }: {
    item: Task;
    section: TodoGroup;
  }) => (
    <View
      style={[
        styles.groupItem,
        color !== undefined && { backgroundColor: color },
      ]}
    >
      <View style={styles.item}>
        <Text>{item.task}</Text>
      </View>
    </View>
  );

  const renderGroupHeader = ({
    section: { title, color },
  }: {
    section: TodoGroup;
  }) => (
    <View
      style={[
        styles.groupHeader,
        color !== undefined && { backgroundColor: color },
      ]}
    >
      <Text>{title}</Text>
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
    />
  );
};

export default GroupList;
