import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  statusBox: {
    flexDirection: "row",
    gap: 8,
  },

  statusText: {
    fontWeight: "bold"
  },

  created: {
    color: "#4EA8DE"
  },

  concluded: {
    color: '#8284FA'
  },

  score: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#333",
    borderRadius: 999,
  },
});
