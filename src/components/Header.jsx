import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src="./logo.svg" style={{width: "25px"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/photos"}>Photos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/albums"}>Albums</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active"to={"/posts"}>Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/comments"}>Comments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/todos"}>Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/users"}>Users</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header