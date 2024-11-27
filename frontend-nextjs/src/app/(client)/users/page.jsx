import Link from "next/link";
import UserList from "./UserList";

export const metadata = {
    title: "Danh sach nguoi dung",
};

const getUsers = async () => {
    const response = await fetch(`${process.env.SERVER_API}/users`, {
        cache: "no-store", // Không sử dụng cache
    });
        return response.json();
  };

export default async function UsePage() {
    const { success, data: users } = await getUsers();

    if (!success) {
        return (
            <div>
                <h2>Không thể tải người dùng</h2>
            </div>
        );
    }



    return (
        <div>
            <h1>Quản lý người dùng</h1>
            <Link href="/users/create" className="btn btn-primary mb-3">
                Thêm mới
            </Link>
            {/* Hiển thị danh sách người dùng */}
            <UserList users={users} />
        </div>
    );
}
