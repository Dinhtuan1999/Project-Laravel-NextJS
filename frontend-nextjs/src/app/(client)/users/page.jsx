import Link from "next/link";
import UserList from "./UserList";

export const metadata = {
    title: "Danh sach nguoi dung",
};

// Hàm lấy dữ liệu người dùng, xử lý lỗi khi fetch thất bại
const getUsers = async () => {
    try {
        const response = await fetch(`${process.env.SERVER_API}/users`);
        if (!response.ok) {
            // Nếu fetch trả về lỗi (ví dụ: 404 hoặc 500)
            throw new Error("Failed to fetch users");
        }
        return response.json();
    } catch (error) {
        // Trả về lỗi nếu không thể fetch dữ liệu
        console.error("Error fetching users:", error);
        return { success: false, data: [] }; // Trả về success: false nếu có lỗi
    }
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
