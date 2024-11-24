"use server"

import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export const handleLogin = async (formData) =>{
    const form = Object.fromEntries(formData);

    const response = await fetch(`${process.env.SERVER_API}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(form),
    });

    if(!response.ok){
        return false;
    }

    const {success, token } = await response.json();
    console.log(token);

    if(!success){
        console.log('success', success);

        return false;
    }

    const cookieStore = await cookies()

    cookieStore.set('token', token, {
        httpOnly: true,
        secure: false,
        path:"/",
        maxAge: 86400, //1 day
    })

    redirect("/");
    
};