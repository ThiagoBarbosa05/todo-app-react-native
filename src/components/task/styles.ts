import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 24,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
  },

  textChecked: {
    color: "#808080",
    lineHeight: 19,
    textDecorationLine: 'line-through',
    flex: 1,
  },

  trash: {
    width: 14,
    height: 16,
  },

  text: {
    color: "#F2F2F2",
    lineHeight: 19,
    flex: 1,
  },
});
