import React from "react";
import '../App.css';

const Console = () => {

const source = "../../images/";
const images = [ "icon-paper.svg","icon-rock.svg", "icon-scissors.svg"];

return (
    <div className="console-container">
        <div className="console">
            <div className="console-body">
                {images.map((image, index) => (
                    <button key={index} className={`console-button ${image.split('-')[1].split('.')[0]}`}>
                        <img src={`${source}${image}`} alt={image.split('-')[1]} />
                    </button>
                ))}
            </div>
        </div>
    </div>
);
};

export default Console;