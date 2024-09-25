import Link from "next/link";

export const metadat = {
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

            </tbody>
        </table>
    </div>
  )
}
