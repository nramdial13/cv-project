import React from "react";

const Personal = (props) => {
  const { tasks } = props;

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Personal;
