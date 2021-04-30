import React from "react";
import Slideshow from "../../components/Main/Slideshow.js"
export default function EPublications() {
    return(
        <div>
            <p> This is the E-Publications Page </p>
            <Slideshow>
                <div>
                    <img style={{minWidth: "1500px", maxHeight: "300px"}} alt="cat" src="https://api.timeforkids.com/wp-content/uploads/2020/08/animalVoting.jpg?w=1024" />
                    <p>meerkats :)</p>
                </div>
                <div>
                    <img style={{maxWidth: "600px", maxHeight: "300px"}} alt="cat" src="https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2019/10/giant-panda-750x400.jpg" />
                    <p>panda :O</p>
                </div>
            </Slideshow>
        </div>
    );
};