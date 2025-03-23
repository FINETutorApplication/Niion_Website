import Press1 from "../../Assets/SVGs/Press1.SVG";
import Press2 from "../../Assets/SVGs/Press2.SVG";
import Press3 from "../../Assets/SVGs/Press3.SVG";
import Press4 from "../../Assets/SVGs/Press4.SVG";
import Press5 from "../../Assets/SVGs/Press5.SVG";
import React from "react";
import "./style.css";

const Branding = () => {
    return (
        <div class="brand">
        <div class="label">Trusted By Industry</div>
        <div class="logos">
            <img class="press-logo" src={Press1} />
            <img class="press-logo2" src={Press2}  />
            <img class="press-logo3" src={Press3}  />
            <img class="press-logo4" src={Press4}  />
            <img class="press-logo5" src={Press5}  />
        </div>
        </div>
    );
};

export default Branding;