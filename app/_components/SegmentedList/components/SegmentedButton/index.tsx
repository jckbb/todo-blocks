import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

interface Props {
  onPress: () => void;
  isSelected: boolean;
  label: string;
  color?: string;
}

const SegmentedButton = ({ onPress, color, label, isSelected }: Props) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={[
        styles.segmentedButton,
        color !== undefined && { borderColor: color },
        isSelected && {
          backgroundColor: color !== undefined ? color : "#dfe6e9",
        },
      ]}
    >
      <Text>{label}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default SegmentedButton;
