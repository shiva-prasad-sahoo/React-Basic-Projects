import React, { useState } from "react";
import { useTodo } from "../contexts";

function Todoform() {
  const [todoinput, setTodoinput] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todoinput) return;

    addTodo({ todo: todoinput, completed: "false" });
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoinput}
        onChange={(e) => setTodoinput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Todoform;
