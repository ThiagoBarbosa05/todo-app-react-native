import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import trash from "../../../assets/trash.png";
import { styles } from "./styles";
import { HandleCompleteTaskParams, ITask } from "../../screens/home";
import { useState } from "react";

interface TaskProps {
  task: ITask;
  onCompleteTask: ({ isChecked, taskId }: HandleCompleteTaskParams) => void;
  onRemoveTask: (taskId: string) => void;
}

export function Task({ task, onCompleteTask, onRemoveTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedTask = () => {
    onCompleteTask({ taskId: task.id, isChecked: !isChecked });
    setIsChecked(!isChecked);
  };


  return (
    <TouchableOpacity onPress={handleCheckedTask} style={styles.container}>
      <BouncyCheckbox
        size={17}
        fillColor={task.isComplete ? "#5E60CE" : "#4EA8DE"}
        style={{
          width: 17,
        }}
        isChecked={task.isComplete}
        onPress={handleCheckedTask}
      />
      <Text style={task.isComplete ? styles.textChecked : styles.text}>
        {task.description}
      </Text>

      <TouchableOpacity onPress={() => onRemoveTask(task.id)}>
        <Image source={trash} style={styles.trash} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
