import { connectDB } from "@/helper/db";

connectDB();
/**
 * @param {NextRequest} request - using we can access request headers, method, body, cookies, etc
 * @param {Object} params - this will contain variable data which we will pass via route
 *
 * @returns  {NextResponse} reponse of api
 * */

export function GET(request, { params }) {}
export function POST(request, { params }) {}
export function PUT(request, { params }) {}
export function DELETE(request, { params }) {}
