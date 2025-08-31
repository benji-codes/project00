import React from 'react'
import styled from "styled-components";

const TaskContainer = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => (props.completed ? "#d4edda" : "lightgray")};
    border-radius: 5px;
    margin: 5px 0;
`;
const TaskText = styled.span`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
    opacity: 0.6;
`;

function TaskItem({ task }) {
  return (
    <TaskContainer completed={task.completed}>
        <TaskText completed={task.completed}>{task.text}</TaskText>
        <button>❌</button>
    </TaskContainer>
  );
}

export default TaskItem;