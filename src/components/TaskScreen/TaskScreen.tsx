import React from "react";
import "./TaskScreen.css";

const TaskScreen: React.FC = () => {
  return (
    <>
      <div className="task">
        <h3>Кратчайшее расстояние от X до Y</h3>

        <div>
          Эта задача взята с алгоритмического собеседования на позицию Data
          Engineer в Яндекс
        </div>

        <h3>Задание</h3>

        <div>
          На вход подается список из нескольких элементов: "X", "O", "Y".
          Необходимо определить кратчайшее расстояние от X до Y из всех
          возможных комбинаций пар.
        </div>

        <h3>Например</h3>

        <ul>
          <li>["X", "Y"] {"->"} 1</li>
          <li>["Y", "X"] {"->"} 1</li>
          <li>["X", "O", "Y"] {"->"} 2</li>
          <li>["Y", "O", "X"] {"->"} 2</li>
          <li>["Y", "O", "Y", "O", "O", "X"] {"->"} 3</li>
        </ul>
      </div>
    </>
  );
};

export default TaskScreen;
