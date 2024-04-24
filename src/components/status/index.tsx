import { Text, View } from "react-native";
import { styles } from "./styles";

interface StatusProps {
  tasksCompleted: number;
  createdTasks: number;
}

export function Status({ tasksCompleted, createdTasks }: StatusProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBox}>
        <Text style={[styles.statusText, styles.created]}>Criadas</Text>
        <Text style={styles.score}>{createdTasks}</Text>
      </View>
      <View style={styles.statusBox}>
        <Text style={[styles.statusText, styles.concluded]}>Concluídas</Text>
        <Text style={styles.score}>{tasksCompleted}</Text>
      </View>
    </View>
  );
}
