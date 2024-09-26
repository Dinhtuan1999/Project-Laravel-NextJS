import Link from "next/link";
import SearchForm from "./SearchForm";

export const metadata = {
    title: "Danh sach nguoi dung"
}

const getUsers = async () =>{
    const response = await fetch(`${process.env.SERVER_API}/users`);
    return response.json();
};

export default async function UsePage() {

    const {success, data: users} = await getUsers();

    if(!success){
        <div> <h2>khong th tai nguoi dung</h2></div>
    }
    return (
    <div>
      <h1>Quan ly nguoi dung</h1>
        <Link href="/users/create" className="btn btn-primary mb-3">
            Them moi
        </Link>

        <SearchForm />
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
    </div>
    )
}
