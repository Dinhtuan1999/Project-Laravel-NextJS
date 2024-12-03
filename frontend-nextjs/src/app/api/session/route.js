
const fs = require("fs");
import { NextResponse } from "next/server";
import path from "path";

export const config = {
    runtime: "nodejs", // Sử dụng Node.js runtime
};

export async function POST (request){

    const {token, user } = await request.json({});

    if( token ){
        const name = token.split("|").slice(-1).join("");
        const directory = path.join(process.cwd(), "session");
        const filePath = path.join(directory, name);

        // Tạo thư mục nếu chưa tồn tại
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        // Ghi file
        fs.writeFileSync(filePath, JSON.stringify(user));
    }

    return NextResponse.json({
        success: true,
    });
}

export async function GET (request){

    const token = request.headers.get("token");

    if (token ) {
        const name = token.split("|").slice(-1).join("");
        const path = process.cwd() + "/session/" + name;
        const user = JSON.parse(fs.readFileSync(path));
        return NextResponse.json({
            user,
        });
    }
    return NextResponse.json({
        user: null,
    });
}