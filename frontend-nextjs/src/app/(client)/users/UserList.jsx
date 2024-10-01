"use client";

import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { debounce } from "@/utils/utils";

export default function UserList({ users }) {
    const [userData, setUserData] = useState({
        data: [],
    });

    const getUsers = async (q) => {
        try {
            const response = await fetch(`${process.env.SERVER_API}/users?q=${q}`);
            if (!response.ok) {
                // Nếu fetch trả về lỗi (ví dụ: 404 hoặc 500)
                throw new Error("Failed to fetch users");
            }
            const { data: users } = await response.json();
            setUserData(users)
        } catch (error) {
            // Trả về lỗi nếu không thể fetch dữ liệu
            console.error("Error fetching users:", error);
            return { success: false, data: [] }; // Trả về success: false nếu có lỗi
        }
    };

    const handleSearch = debounce((e) => {
        getUsers(e.target.value);

    })

    useEffect(() => {
        setUserData(users);
    }, [])

    return (
        <>
            <SearchForm handleSearch={handleSearch} />

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th width="5%">STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th width="5%">Edit</th>
                    <th width="5%">Delete</th>
                </tr>
                </thead>
                <tbody>
                {userData.data.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning btn-sm">Edit</button>
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
