import DeleteDialog from "@/components/DeleteDialog";
import React, { useState } from "react";
import axios from "axios";

const handleDeleteTodo = async (id) => {
  console.log("deleteing to do with id " + id);
  const res = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(res);
  console.log(res.status);
};

function Todo({ todo }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div key={todo.id}>
      <p>{todo.id}</p>
      <button className="border">Update</button>
      <button
        className="border"
        onClick={(e) => {
          setIsDialogOpen(true);
        }}
      >
        Delete
      </button>

      <DeleteDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={() => handleDeleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
