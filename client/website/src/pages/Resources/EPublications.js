import React from "react";
import Slideshow from "../../components/Slideshow";

export default function EPublications() {
    return (
        <div>
            <p> This is the E-Publications Page </p>
            <Slideshow height="400px" width="100%">
                <div>
                    <img
                        style={{ width: "100vw", height: "400px" }}
                        alt="cat"
                        src="https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024"
                    />
                </div>
                <div>
                    <img
                        style={{ width: "100vw", height: "400px" }}
                        alt="cat"
                        src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg"
                    />
                </div>
                <div>
                    <img
                        style={{ width: "100vw", height: "400px" }}
                        alt="cat"
                        src="https://28qs4b33l1o7458ep2hwzyw1-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Ring-tail-Lemur-1550x700.jpg"
                    />
                </div>
            </Slideshow>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
        </div>
    );
}
