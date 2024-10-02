"use client";

import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import { debounce } from "@/utils/utils";
import Link from "next/link";

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
    const removeUser = async (id) => {
        const response = await fetch(`${process.env.SERVER_API}/users/${id}`, {
          method: "DELETE",
        });
        return response.ok;
      };

    const handleSearch = debounce((e) => {
        getUsers(e.target.value);

    })

    const handleRemoveUser = async (id) => {
        if (window.confirm("Bạn có chắc chắn?")) {
          const status = await removeUser(id);
          if (status) {
            getUsers("");
          }
        }
      };

    useEffect(() => {
        setUserData(users);
    }, [])

    console.log('userData', userData);
    

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
                            <Link href={`/users/edit/${user.id}`} className="btn btn-warning btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button className="btn btn-danger btn-sm" 
                                onClick={() => handleRemoveUser(user.id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
