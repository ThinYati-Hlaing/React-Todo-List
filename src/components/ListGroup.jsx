import React from "react";
import List from "./List";
import EmptyStage from "./EmptyStage";

const ListGroup = (props) => {
  return (
    <div id="listGroup">
      {props.tasks.length === 0 && <EmptyStage />}

      {props.tasks.map((task) => (
        <List
          key={task.id}
          job={task.job}
          isDone={task.isDone}
          id={task.id}
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
        />
      ))}

      <div className="flex justify-end">
        {props.tasks.length > 0 && <button onClick={props.doneAllTask} className=" bg-gray-300 px-4 py-2 rounded-full">
          All Done
        </button>
        }
      </div>
    </div>
  );
};

export default ListGroup;
