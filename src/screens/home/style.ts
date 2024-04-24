import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1
  },

  header: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    alignItems: "center",
    height: 223,
  },

  logo: {
    width: 110,
    height: 32,
    marginTop: 112,
  },

  plus: {
    width: 16,
    height: 16,
  },

  addTaskForm: {
    marginTop: -32,
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 4,
  },

  addTaskInput: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#262626",
    fontSize: 16,
    color: "#F2F2F2",
  },

  addTaskButton: {
    backgroundColor: "#1E6F9F",
    width: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  inputFocused: {
    borderColor: "#5E60CE",
  },
  
  inputBlurred: {
    borderColor: "#0D0D0D",
  },
});
