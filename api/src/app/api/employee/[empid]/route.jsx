import { employee } from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = (request, content) => {
    const empdata = employee.filter((item) => item.employeeId == content.params.empid)

    return NextResponse.json(empdata.length == 0 ? { result: 'no user found' } : { result: empdata }, { status: 200 })
}