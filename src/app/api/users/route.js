import { NextResponse } from "next/server";

export function GET(request) {
  const userList = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 28,
      role: "Software Engineer",
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      age: 32,
      role: "Product Manager",
      location: "San Francisco, USA",
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      age: 25,
      role: "UI/UX Designer",
      location: "London, UK",
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      age: 30,
      role: "Data Scientist",
      location: "Berlin, Germany",
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      age: 27,
      role: "Frontend Developer",
      location: "Sydney, Australia",
    },
  ];
  return NextResponse.json(userList);
}

export function POST(request) {}
export function PUT(request) {}
export function DELETE(request) {}
