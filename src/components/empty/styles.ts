import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: "#333",
    marginHorizontal: 24,
  },

  clipboard: {
    width: 56,
    marginBottom: 16
  },

  emptyTaskWarning: {
    paddingTop: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },

  emptyTaskWarningText: {
    lineHeight: 19,
    color: '#808080'
  },

  strong: {
    fontWeight: 'bold'
  }
  
})