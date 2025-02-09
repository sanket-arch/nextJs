"use client";
import React, { useEffect, useState } from "react";
import Todo from "./todo";
import Loading from "./loading";
import Pagination from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";

function ShowTasks() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { paginatedData, totalPage, currentPage, goToPage } = usePagination(
    todos,
    5
  );

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=50"
      );
      if (!response.ok) throw new Error("Failed to fetch todos");

      const data = await response.json();
      setTodos(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handlePageChange = (page) => {
    console.log(`going to page ${page}`);
    goToPage(page);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  
  if (isLoading) return <Loading />;
  return (
    <div>
      {paginatedData.map((todo) => (
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
