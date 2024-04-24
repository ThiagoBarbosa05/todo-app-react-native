import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import clipboard from "../../../assets/clipboard.png";

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.emptyTaskWarning}>
        <Image source={clipboard} style={styles.clipboard} />
        <Text style={[styles.emptyTaskWarningText, styles.strong]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyTaskWarningText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
