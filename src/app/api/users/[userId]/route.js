import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDB();
/**
 * @param {NextRequest} request - using we can access request headers, method, body, cookies, etc
 * @param {Object} params - this will contain variable data which we will pass via route
 *
 * @returns  {NextResponse} reponse of api
 * */

export async function GET(request, { params }) {
  try {
    const { userId } = params;
    /**
     * select method indicate that we need to select from the query
     * +fieldName : indicates that fieldname need to be selected
     * -fieldname : indicates that we don't need fieldName
     */
    const user = await User.findById({ _id: userId }).select("-password");

    if (user == null) {
      return NextResponse.json(
        { error: "No user found for the given user" },
        { status: 404, success: false }
      );
    }
    return NextResponse.json({ user }, { success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error while fetching the user" },
      { success: false, status: 500 }
    );
  }
}
export function POST(request, { params }) {}
export function PUT(request, { params }) {}
export function DELETE(request, { params }) {}
