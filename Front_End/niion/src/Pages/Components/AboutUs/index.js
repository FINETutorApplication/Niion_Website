import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import AboutUsImg1 from "../../Assets/image9.jpg";
import AboutUsImg2 from "../../Assets/image10.jpg";
import arrow from "../../Assets/SVGs/arrow.SVG";
import React from "react";
import "./style.css";

const AboutUs = () => {
    return (
    <ScrollPage page={1} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
        <div class="about-us-hero">
        <div class="about-us">
        <div class="content-section">
            <div class="content-row">
            <div class="section-title">Connect With Us</div>
            <div class="content-column">
                <div class="content-title">
                Pioneers of Sustainable Farming Solutions
                </div>
                <div class="content-text">
                Our journey began with a vision to transform the way we produce food
                by integrating modern technology with traditional farming values.
                Today, we are proud to empower farmers and agribusinesses worldwide
                with innovative tools, data-driven solutions, and sustainable
                practices that not only increase productivity but also protect our
                natural resources.
                </div>
                <div class="button-base">
                <div class="button-text">Read More</div>
                <div class="button-icon-container">
                    <img class="button-icon" src={arrow} />
                </div>
                </div>
            </div>
            </div>
            <div class="image-section">
            <img class="image1" src={AboutUsImg1} />
            <img class="image6" src={AboutUsImg2} />
            </div>
        </div>
        </div>
        </div>
    </ScrollPage>
    );
};

export default AboutUs;