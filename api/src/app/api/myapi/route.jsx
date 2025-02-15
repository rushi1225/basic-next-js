import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ name: 'rushi', age: 20, city: 'nagar' }, { status: 201 })
}