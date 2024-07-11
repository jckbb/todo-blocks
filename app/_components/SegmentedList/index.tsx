import { View } from "react-native";
import SegmentedButton from "./components/SegmentedButton";
import styles from "./styles";

export type Option = { label: string; color?: string };

type SegmentedList = {
  onChange: (value: string) => void;
  options: Option[];
  selected: string;
};

const SegmentedList = ({ options, onChange, selected }: SegmentedList) => (
  <View style={styles.segmentedList}>
    {options.map((item, index) => (
      <SegmentedButton
        label={item.label}
        color={item.color}
        key={index}
        isSelected={selected === item.label}
        onPress={() => onChange(item.label)}
      />
    ))}
  </View>
);

export default SegmentedList;
