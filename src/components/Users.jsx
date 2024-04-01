
import { useEffect, useState } from "react"
import { get } from "../data/get"
import Header from "./Header";
import Footer from "./footer";
import SpinnerCustom from "./SpinnerCustom";


function Users() {
    let [users, setUsers] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('users');
            setUsers(data);
        }
        api();
    }, [])

    if (users === null) {
        return (
            <>
                <Header />
                <SpinnerCustom name="Users" />

            </>
        )
    }
    return (
        <div>
            <Header />
            <div className="container mt-4 text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-white">Users</h1>
                        <div className="table-responsive">
                            <table className="table table-dark table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Webiste</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <Footer/> */}
        </div>
    )
}
export default Users