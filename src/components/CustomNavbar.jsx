"use client";
import Link from "next/link";
import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 h-12 py-7 px-24 flex justify-between items-center">
      <div id="left" className="text-2xl">
        <h1>
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div id="middle">
        <ul id="menus" className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <a href="/show-tasks">Show Tasks</a>
          </li>
        </ul>
      </div>
      <div id="right">
        <ul className="flex space-x-4">
          <li>
            <a href="#!">Log In</a>
          </li>
          <li>
            <a href="#!">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
