import React from "react";

const Articles = () => {
    return (
        <>
            <h2 className="d-flex flex-row justify-content-center m-5 main-title1">Articles</h2>
            <p className="d-flex flex-row justify-content-center m-5">Read and learn about various concepts</p>
            <div className="container-card " >
                <div className="card">
                    <img src="https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">7 Hurdles That Can Make
                            Your Bike Insurance
                            Inecient</h5>

                        <a to="#" className="card-link text-decoration-none text-uppercase">DISCOVER MORE</a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


                <div className="card">
                    <img src="https://media.istockphoto.com/photos/concept-of-insurance-for-your-health-hand-hold-wooden-block-with-icon-picture-id1158616248?k=20&m=1158616248&s=612x612&w=0&h=kgZEB-zWoMD3S2ivVS6AnBINv0B6mZ6an5WaBV9fPac=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Picking A Health Insurance
                            Plan? <br /> Top 10 Questions To Ask</h5>
                        <a to="#" className="card-link text-decoration-none text-uppercase">DISCOVER MORE</a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnnZ_6N7IR666hilcobMDZ9n0J4-ehrNH4A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">5 factors you must check before buying a personal 
                        accident insurance cover</h5>
                        <a to="#" className="card-link text-decoration-none text-uppercase">DISCOVER MORE </a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            <div class="text-center">
                <button type="button" class="btn btn-danger">READ MORE ARTICLES</button>
            </div>

        </>

    );
};

export default Articles;