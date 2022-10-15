import React from "react";

function Gif(props) {
    return (
        <div className="gif-row">
            <img src={props.imgSrc} alt="" />
        </div>
    )
}

export default Gif;
