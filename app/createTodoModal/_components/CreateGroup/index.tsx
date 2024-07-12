import React, { useEffect, useState } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import { Group } from "@/app/_machines/taskMachine";

interface Props {
  name?: string;
  onChange: (group: { name: string; color: string }) => void;
}

const colorSwatches = ["#7bed9f", "#ff7f50", "#eccc68", "#70a1ff", "#5352ed"];

const CreateGroup = ({ name, onChange }: Props) => {
  const [formData, setFormData] = useState<Partial<Group>>();

  useEffect(() => {
    // validate
    if (formData?.name !== undefined && formData?.color !== undefined) {
      onChange({ name: formData.name, color: formData.color });
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder="Enter group"
        value={name}
        onChangeText={(text) =>
          setFormData((prev) => ({ ...prev, name: text }))
        }
        numberOfLines={1}
        maxLength={15}
      />
      <View style={styles.swatches}>
        {colorSwatches.map((color, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              setFormData((prev) => ({ ...prev, color }));
            }}
          >
            <View
              style={[
                styles.colorSwatch,
                { backgroundColor: color },
                formData?.color === color && {
                  borderColor: "#000",
                  borderWidth: 1,
                },
              ]}
            />
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default CreateGroup;
