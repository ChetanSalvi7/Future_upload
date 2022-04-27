import React from "react";
import "../src/testinomial.css";


const Testimonials = () => {
    return (
        <>
            <h2 className="d-flex flex-row justify-content-center m-5 main-title1">Customer Testimonials</h2>
            <div className="container-xl">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="media">
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur.</p>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                <button type="button" class="btn btn-danger">VIEW MORE</button>
            </div>
                </div>
            </div>
        </>

    );
};

export default Testimonials;