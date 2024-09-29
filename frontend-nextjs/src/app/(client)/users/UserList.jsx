"use client";
import SearchForm from "./SearchForm";

export default function UserList({ users }) {
    const handleSearch = (e) => {
        let keyword = e.target.value;

        console.log(1); // Log giá trị 1 khi sự kiện được kích hoạt
        console.log('user list',keyword); // Log giá trị của từ khóa tìm kiếm
    };

    return (
        <>
            <SearchForm handleSearch={handleSearch} /> {/* Truyền handleSearch vào SearchForm */}

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
                {users.data.map((user, index) => (
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
