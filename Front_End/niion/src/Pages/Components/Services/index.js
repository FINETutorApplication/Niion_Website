import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import MinusSVG from "../../Assets/SVGs/minus.SVG";
import PlusSVG from "../../Assets/SVGs/plus.SVG";
import team_img from "../../Assets/image12-removebg-preview.png";
import team_vid from "../../Assets/vid1.mp4";
import React from "react";
import "./style.css";

const Services = () => {
    return (
    <ScrollPage style={{ height: "2300px" }} page={3} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
        <div class="service">
        <div class="content">
            <div class="footer-title">Our Service</div>
            <div class="footer-column">
            <div class="footer-text">
                Transforming Agriculture, One Solution at a Time
            </div>
            <div class="footer-text2">
                We provide innovative agricultural solutions tailored to your unique
                needs. With a focus on sustainability and efficiency, our services range
                from smart irrigation systems to soil health monitoring, ensuring that
                you achieve exceptional results season after season
            </div>
            </div>
        </div>
        <div class="container-benefits">
            <div class="cultivation-actors">
            <div class="title">
                <div class="feature-number">01</div>
                <div class="feature-title">Precision Farming Solutions</div>
            </div>
            <div class="minus">
                <img class="vuesax-linear-minus" src={MinusSVG} />
            </div>
            </div>
            <div class="cultivation-actors2">
            <div class="feature-container">
                <div class="content2">
                <div class="title2">
                    <div class="feature-number2">02</div>
                    <div class="feature-title2">Best Team Members</div>
                </div>
                <div class="feature-description">
                Our team is built on collaboration, dedication, and expertise. Each member brings unique skills and creativity, working together seamlessly to achieve our goals. With a shared passion for excellence, we support and inspire one another, ensuring success in every project we take on. Meet the best team members who make every challenge an opportunity and every idea a reality!
                </div>
                <img class="image" src={team_img} />
                <video className="video" src={team_vid} autoPlay loop muted playsInline />
                </div>
                <div class="add">
                <img class="vuesax-linear-add" src={PlusSVG} />
                </div>
            </div>
            
            </div>
            <div class="cultivation-actors">
            <div class="title3">
                <div class="feature-number">03</div>
                <div class="feature-title3">Crop Monitoring &amp; Management</div>
            </div>
            <div class="minus">
                <img class="vuesax-linear-minus2" src={MinusSVG} />
            </div>
            </div>
            <div class="cultivation-actors">
            <div class="title3">
                <div class="feature-number">04</div>
                <div class="feature-title3">Soil Health Analysis</div>
            </div>
            <div class="minus">
                <img class="vuesax-linear-minus3" src={MinusSVG} />
            </div>
            </div>
            <div class="cultivation-actors">
            <div class="title3">
                <div class="feature-number">05</div>
                <div class="feature-title3">
                Agricultural Training &amp; Consultancy
                </div>
            </div>
            <div class="minus">
                <img class="vuesax-linear-minus4" src={MinusSVG}/>
            </div>
            </div>
        </div>
        </div>
    </ScrollPage>
    );
};

export default Services;