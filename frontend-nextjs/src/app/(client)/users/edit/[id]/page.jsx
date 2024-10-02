import React from 'react'
import Form from './Form'
import { notFound } from 'next/navigation';

export const metadata = {
    title: "Cap nhat nguoi dung"
}

const getUsers = async (id) => {
  try {
      const response = await fetch(`${process.env.SERVER_API}/users/${id}`);
      if (!response.ok) {
          // Nếu fetch trả về lỗi (ví dụ: 404 hoặc 500)
          throw new Error("Failed to fetch users");
      }
      const { data: user } = await response.json();
      return user;
  } catch (error) {
      // Trả về lỗi nếu không thể fetch dữ liệu
      console.error("Error fetching users:", error);
      return { success: false, data: [] }; // Trả về success: false nếu có lỗi
  }
};

export default async function EditUserPage({params}) {

  const { id } =  params;
  const user = await getUsers(id);

  if(!user){
    return notFound();
  }

  return (
    <div>
        <h1>Cap nhat nguoi dung</h1>
        <Form user={user} id={id} />
      
    </div>
  )
}
