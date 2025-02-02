import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
import axios from "axios";
connectDB();

/**
 * @param {NextRequest} request - Using we can access request headers, method, body, cookies, etc
 * @param {Object} params - this will contain variable data which we will pass via route
 *
 * @returns  {NextResponse} reponse of api
 * */
export async function GET(request) {
  try {
    const userList = await User.find({});

    return NextResponse.json(userList);
  } catch (error) {
    console.log("Error while fecthing users");
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Erorr" },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const { name, email, password, about, profileUrl } = await request.json();
    console.log(request.json());
    const user = new User({
      name,
      email,
      password,
      about,
      profileUrl,
    });
    const savedUser = await user.save();
    console.log(savedUser);
    console.log("user saved successfully " + savedUser.name);
    return NextResponse.json(
      { message: "user Saved Succesfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error while saving user");
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const response = await User.deleteMany({});

    return NextResponse.json({
      message: response.deletedCount + " user(s) deleted successfully.",
    });
  } catch (error) {
    console.log("Error while delting users");
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Erorr" },
      { status: 500 }
    );
  }
}
