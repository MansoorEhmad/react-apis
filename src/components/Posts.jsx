
import { useEffect, useState } from "react"
import { get } from "../data/get"
import Header from "./Header";
import Footer from "./footer";
import { Spinner } from "react-bootstrap";
import SpinnerCustom from "./SpinnerCustom";


function Posts() {
    let [posts, setPosts] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('posts');
            setPosts(data);
        }
        api();
    }, [])

    if (posts === null) {
        return (
            <>
            <Header />
            <SpinnerCustom name="Posts"/>
            </>
        )
    }
    return (
        <>
            <Header />
            <div className="container mt-4 text-center">
                <div className="row">

                    <h1 className="text-white">Posts</h1>
                    {
                        posts.map(post => (
                            <div className="col-12 col-md-4 text-center" key={post.id}>
                                <div className="card border-white mb-3 text-white" style={{ maxWidth: "18rem", backgroundColor: "rgb(28, 24, 22)"}}>
                                    <div className="card-header bg-transparent border-white">{post.id}.</div>
                                    <div className="card-body text-white">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Posts