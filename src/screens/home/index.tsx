import {
  Alert,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../../../assets/logo.png";
import plus from "../../../assets/plus.png";
import { styles } from "./style";
import { useState } from "react";
import { Status } from "../../components/status";
import { Task } from "../../components/task";
import { Empty } from "../../components/empty";
import uuid from "uuid-random";

export interface ITask {
  id: string;
  description: string;
  isComplete: boolean;
}

export interface HandleCompleteTaskParams {
  taskId: string;
  isChecked: boolean;
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [descriptionTask, setDescriptionTask] = useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCreateTask = () => {
    if (descriptionTask === "") {
      return Alert.alert("Task inválida", "Por favor insira uma task.");
    }
    setTasks((prevState) => [
      ...prevState,
      { id: uuid(), description: descriptionTask, isComplete: false },
    ]);
    setDescriptionTask("");
  };

  const handleInputChange = (description: string) => {
    setDescriptionTask(description);
  };

  const handleCompleteTask = ({
    taskId,
    isChecked,
  }: HandleCompleteTaskParams) => {
    const tasksCompleted = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplete: isChecked };
      }

      return task;
    });

    setTasks(tasksCompleted);
  };

  const handleRemoveTask = (taskId: string) => {
    Alert.alert("Remover", "Deseja remover essa task?", [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((task) => taskId !== task.id)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const quantityTasksCompleted = tasks.filter((task) => task.isComplete).length;
  const quantityCreatedTasks = tasks.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.addTaskForm}>
        <TextInput
          style={[
            styles.addTaskInput,
            isFocused ? styles.inputFocused : styles.inputBlurred,
          ]}
          placeholderTextColor="#808080"
          placeholder="Adicione uma nova tarefa"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleInputChange}
          value={descriptionTask}
        />
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={handleCreateTask}
        >
          <Image source={plus} style={styles.plus} />
        </TouchableOpacity>
      </View>

      <Status
        tasksCompleted={quantityTasksCompleted}
        createdTasks={quantityCreatedTasks}
      />
      <FlatList
        style={{ marginTop: 12 }}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            onCompleteTask={handleCompleteTask}
            onRemoveTask={handleRemoveTask}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
