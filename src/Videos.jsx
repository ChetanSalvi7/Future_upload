import React from "react";

const Videos = () => {
    return (
        <>
        <div className="container-videos">
            <h2 className="d-flex flex-row justify-content-center m-5">Videos</h2>
            <h5 className="d-flex  justify-content-center ">Watch and learn form the best</h5>
            <div className="container container-video">
                <div class="d-flex flex-row justify-content-evenly mx-5 col-md-10">
                    <div class="p-2 bd-highlight videolist"><iframe width="320" height="245" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe><p className="videotext"> Lorem ipsum dolor sit amet.</p></div>
                    <div class="p-2 bd-highlight videolist"><iframe width="320" height="245" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe><p className="videotext"> Lorem ipsum dolor sit amet.</p></div>
                    <div class="p-2 bd-highlight videolist"><iframe width="320" height="245" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe><p className="videotext"> Lorem ipsum dolor sit amet.</p></div>
                </div>
            </div>
        </div>
        </>

    );
};

export default Videos;