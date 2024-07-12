import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface Props {
  onPress: () => void;
}

const AddTaskButton = ({ onPress }: Props) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{"Add"}</Text>
  </TouchableOpacity>
);

export default AddTaskButton;
