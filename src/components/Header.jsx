import { Link } from "react-router-dom"
function Header() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src="./logo.svg" style={{width: "25px"}}/></Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/photos">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/albums">Albums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/comments">Comments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/todos">Todos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/users">Users</a>
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