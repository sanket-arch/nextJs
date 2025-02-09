"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Todo from "./todo";
import Loading from "./loading";
import Pagination from "@/components/Pagination";

function ShowTasks() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState();
  const searchParams = useSearchParams();
  const taskPerPage = 5;
  const currentPage = searchParams?.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;
  const lastIndexOfPrevTask = currentPage * taskPerPage;
  const startIndexOfPrevTask = lastIndexOfPrevTask - taskPerPage;
  const currentTasks = todos.slice(startIndexOfPrevTask, lastIndexOfPrevTask);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=50"
      );
      if (!response.ok) throw new Error("Failed to fetch todos");

      const data = await response.json();
      console.log("calling fetch do");
      setTotalPage(Math.ceil(data.length / taskPerPage));
      setTodos(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handlePageChange = (page) => {
    console.log(`going to page ${page}`);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div>
      {currentTasks.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ShowTasks;
