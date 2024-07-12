import { View } from "react-native";
import SegmentedButton from "./components/SegmentedButton";
import styles from "./styles";
import { useState } from "react";

export type Option = { name: string; color: string };

type SegmentedList = {
  onChange: (group: { name: string; color: string }) => void;
  options: Option[];
};

const SegmentedList = ({ options, onChange }: SegmentedList) => {
  const [selected, setSelected] = useState<string>();
  return (
    <View style={styles.segmentedList}>
      {options.map((item, index) => (
        <SegmentedButton
          label={item.name}
          color={item.color}
          key={index}
          isSelected={selected === item.name}
          onPress={() => {
            setSelected(item.name);
            onChange({ name: item.name, color: item.color });
          }}
        />
      ))}
    </View>
  );
};
export default SegmentedList;
