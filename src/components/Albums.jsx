
import { useEffect, useState } from "react"
import { get } from "../data/get"
import Header from "./Header";
import Footer from "./footer";
import SpinnerCustom from "./SpinnerCustom";


function Albums() {
    let [albums, setAlbums] = useState(null);
    useEffect(() => {
        async function api() {
            const data = await get('albums');
            setAlbums(data);
        }
        api();
    }, [])

    if (albums === null) {
        return (
            <>
            <Header />
            <SpinnerCustom name="Albums"/>
            </>
        )
    }
    return (
        <>
        <Header/>
        <div className="container mt-4 text-center">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-white">Albums</h1>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {
                                albums.map(album => (
                                    <li key={album.id} className="list-group-item text-white" style={{backgroundColor: "rgb(28, 24, 22)"}}>{album.id}. {album.title}</li>
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
export default Albums