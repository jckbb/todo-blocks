import { StyleSheet } from "react-native";

export default StyleSheet.create({
  groupSectionList: {
    flex: 1,
  },
  groupSectionContent: {
    paddingHorizontal: 16,
  },
  groupHeader: {
    backgroundColor: "#dfe6e9",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 16,
  },
  itemDivider: {
    height: 8,
    backgroundColor: "#dfe6e9",
  },
  itemStatus: {
    alignSelf: "flex-end",
    backgroundColor: "#0000001A",
    height: 20,
    width: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  itemStatusDone: {
    backgroundColor: "#2ed573",
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  groupItem: {
    backgroundColor: "#dfe6e9",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  taskDescription: {
    textTransform: "capitalize",
  },
  item: {
    backgroundColor: "#ffffffCC",
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 8,
    borderRadius: 8,
    minHeight: 50,
  },
  groupButt: {
    backgroundColor: "#dfe6e9",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingHorizontal: 16,
    height: 32,
    marginBottom: 8,
  },
});
