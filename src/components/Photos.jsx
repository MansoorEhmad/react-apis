
import { useEffect, useState } from "react"
import { get } from "../data/get"
import SpinnerCustom from "./SpinnerCustom";
import Header from "./Header";
import Footer from "./footer";


function Photos() {
    let [photos, setPhotos] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('photos');
            setPhotos(data);
        }
        api();
    }, [])

    if (photos === null) {
        return (
            <>
            <Header/>
            <SpinnerCustom name="Photos"/>
            </>
        )
    }
    return (
        <>
        <Header/>
        <div className="container mt-4 text-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <h1 className="text-white">Photos</h1>
                {
                    photos.map(photo => (
                        <div className="col mb-4" key={photo.id}>
                            <div className="card text-white" style={{ width: "18rem",backgroundColor: "rgb(28, 24, 22)"}}>
                                <img src={photo.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">{photo.id}. {photo.title}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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
export default Photos