function SpinnerCustom({name}){
    return(
        <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-white">{name}</h1>
                    </div>
                    <div className="col-md-12 mt-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default SpinnerCustom