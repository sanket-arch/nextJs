"use client";
import { useState } from "react";

export default function User() {
  const [userList, setUserList] = useState([]);

  const handleClick = () => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setUserList(data)) // Handle the response data
      .catch((error) => console.error("Error:", error)); // Handle errors
  };
  return (
    <div>
      <p> this general user page</p>
      <button onClick={handleClick}>Click Me</button>
      <div>
        {userList.map((user,index) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
