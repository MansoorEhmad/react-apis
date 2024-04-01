
import { useEffect, useState } from "react"
import { get } from "../data/get"
import Header from "./Header";
import Footer from "./footer";
import SpinnerCustom from "./SpinnerCustom";


function Todos() {
    let [todos, setTodos] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('todos');
            setTodos(data);
        }
        api();
    }, [])

    if (todos === null) {
        return (
            <>
            <Header />
            <SpinnerCustom name="Todos"/>
            </>
        )
    }
    return (
        <>
        <Header/>
        <div className="container mt-4 text-center">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-white">Todos</h1>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {
                                todos.map(todo => (
                                    <li key={todo.id} className="list-group-item text-white" style={{backgroundColor: "rgb(28, 24, 22)"}}>{todo.id}. {todo.title} <span className={todo.completed ? "badge text-bg-success" : "badge text-bg-danger"}>Success</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Todos