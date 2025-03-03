import React from "react";
import '../App.css';

const Console = () => {

const source = "../../images/";
const images = [ "icon-paper.svg","icon-rock.svg", "icon-scissors.svg"];

const handleClick = (value) => {
    console.log(value);
};

return (
    <div className="console-container">
        <div className="console">
            <div className="console-body">
                {images.map((image, index) => {
                    const value = image.split('-')[1].split('.')[0];
                    return (
                        <button key={index} className={`console-button ${value}`} onClick={() => handleClick(value)}>
                            <img src={`${source}${image}`} alt={value} />
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
);
};

export default Console;