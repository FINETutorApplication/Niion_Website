import HeroImage from "../../Assets/image.png";
import React from "react";
import "./style.css";

const Achivements = () => {
    return (
        <div class="archivement">
        <div class="statistic-container">
            <div class="statistic-number">12 +</div>
            <div class="statistic-label">Years Experience</div>
        </div>
        <div class="statistic-container">
            <div class="statistic-number">5,000+</div>
            <div class="statistic-label">Farmers Empowered</div>
        </div>
        <div class="statistic-container">
            <div class="statistic-number">25+</div>
            <div class="statistic-label">Countries Reached</div>
        </div>
        <div class="statistic-container">
            <div class="statistic-number">500+</div>
            <div class="statistic-label">Satisfied Partners</div>
        </div>
        </div>
    );
};

export default Achivements;