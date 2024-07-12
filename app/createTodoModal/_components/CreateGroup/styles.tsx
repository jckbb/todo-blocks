import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 8,
  },
  textBox: {
    minHeight: 40,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#00000066",
    borderRadius: 8,
  },
  colorSwatch: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  swatches: {
    flexDirection: "row",
    gap: 8,
  },
});
