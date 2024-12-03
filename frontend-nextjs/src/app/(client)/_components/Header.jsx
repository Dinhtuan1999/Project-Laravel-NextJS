import React from "react";
import {cookies} from "next/headers";
import {getProfile} from "../../../utils/utils";
import Link from "next/link";
import {getSession} from "@/utils/session";

export default async function Header(){
    const user = await getSession();

    return (
        <header>
            <h1>Header</h1>
            <ul className="d-flex gap-2 list-unstyled">
                {
                    user ? (
                        <>
                            <li>
                                Hi : {user.name}
                            </li>
                            <li>
                                <a href="#">Log Out</a>
                            </li>
                        </>
                    ): (
                        <>
                        <li>
                            <
                                Link href="/auth/login">Login</Link>
                        </li>
                        </>
                    )

                }
            </ul>
        </header>
    )
}