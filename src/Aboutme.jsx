import React from "react";

const Aboutme = () => {
    return (
        <>
            <section className="section-about" id="about">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <h2 className=" row justify-content-center align-items-center">About me</h2>
                        <div className="col-md-6">
                            <div className="section-about-img">
                                <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="380" height="450" alt="this is a image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-desc">
                                <div className="about-desc-content text-left">
                                    <h2>Parth Malkan</h2>
                                    <p>INSURANCE AGENT</p>
                                    <p className="mt-4 font-weight-light">As an insurance advisor, I contribute towards multiple family's
                                        financial prosperity, and I have also have had the opportunity to
                                        affect other people's lives positively. I have helped multiple
                                        families prioritize financial goals, creating a plan for them, and
                                        helping them implement the same. This eventually helps my
                                        clients in building a secure and protected financial future for
                                        them. My mission is to help families keep financially protected,
                                        and that is something that drives me</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Aboutme;