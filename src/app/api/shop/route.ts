import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const lat = params.get("lat");
    const lng = params.get("lng");
    const url = `${process.env.HOTPEPPER_REQ_URL}?key=${process.env.HOTPEPPER_API_KEY}&lat=${lat}&lng=${lng}&format=json&genre=G013&count=30`;
    const res = await axios.get(url);
    return NextResponse.json(res.data);
}
