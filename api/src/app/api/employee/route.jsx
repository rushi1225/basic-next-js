import { employee } from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = () => {
    const data = employee;
    return NextResponse.json(data, { status: 200 })
}