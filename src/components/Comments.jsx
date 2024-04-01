
import { useEffect, useState } from "react"
import { get } from "../data/get"
import Header from "./Header";
import Footer from "./footer";
import SpinnerCustom from "./SpinnerCustom";


function Comments() {
    let [comments, setComments] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('comments');
            setComments(data);
        }
        api();
    }, [])

    if (comments === null) {
        return (
            <>
            <Header />
            <SpinnerCustom name="Comments"/>
            </>
        )
    }
    return (
        <>
            <Header />
            <div className="container mt-4 text-center">
                <div className="row">

                    <h1 className="text-white">Comments</h1>
                    {
                        comments.map(comment => (
                            <div className="col-md-4" key={comment.id}>
                                <div className="card border-white mb-3 text-white" style={{ maxWidth: "18rem", backgroundColor: "rgb(28, 24, 22)"}}>
                                    <div className="card-header bg-transparent border-white">{comment.id}.</div>
                                    <div className="card-body text-white">
                                        <h5 className="card-title">{comment.name}</h5>
                                        <p className="card-text">{comment.body}</p>
                                    </div>
                                    <div className="card-footer bg-transparent border-white">{comment.email}</div>
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
export default Comments