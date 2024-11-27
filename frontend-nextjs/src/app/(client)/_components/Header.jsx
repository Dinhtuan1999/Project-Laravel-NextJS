import React from "react";

export default function Header(){
    return (
        <header>
            <h1>Header</h1>
            <ul className="d-flex gap-2 list-unstyled">
                <li>
                    Hi : You
                </li>
                <li>
                    <a href="#">Log Out</a>
                </li>
            </ul>
        </header>
    )
}