import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  value: string | undefined;
  onChangeText: (value: string) => void;
}

const TaskTextArea = ({ value, onChangeText }: Props) => {
  return (
    <TextInput
      style={styles.textarea}
      placeholder="Enter task"
      multiline={true}
      numberOfLines={4}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default TaskTextArea;
