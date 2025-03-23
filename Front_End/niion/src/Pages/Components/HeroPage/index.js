import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import HeroImage from "../../Assets/image.png";
import arrow from "../../Assets/SVGs/arrow.SVG";
import scroll_down from "../../Assets/SVGs/scroll.SVG";
import React from "react";
import "./style.css";

const HeroPage = () => {
    return (
    <ScrollPage page={0} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
        <div class="hero">
        <img class="hero-image" src={HeroImage} />
        <div class="scroll-icon-container">
            <div class="iconamoon-mouse-light">
            <img class="scroll-icon" src={scroll_down} />
            </div>
            <div class="scroll-text">SCROOL DOWN</div>
        </div>
        <div class="card">
            <div class="rating">
            <img class="provile" src="provile0.png" />
            <img class="provile2" src="provile1.png" />
            <img class="provile3" src="provile2.png" />
            </div>
            <div class="statistic">120,000+</div>
        </div>
        <div class="card2">
            <div class="rating2">
            <div class="provile4">
                <div class="provile5">
                <div class="price">D</div>
                </div>
            </div>
            </div>
            <div class="statistic">2,000,000,000</div>
        </div>
        <div class="frame-2">
            <div class="hero-section">
            <div class="hero-title">
                Empowering Sustainable Agriculture for a Better Future
            </div>
            <div class="hero-subtitle">
                Join us in revolutionizing agriculture through innovative technology and
                sustainable practices. We are committed to enhancing crop yield,
                conserving resources, and supporting farmers worldwide.
            </div>
            </div>
            <div class="button-base1">
            <div class="button-text1">Our Solutions</div>
            <div class="button-icon-container1">
                <img class="button-icon1" src={arrow} />
            </div>
            </div>
        </div>
        <div class="header-navigation">
            <div class="navigation-container">
            <div class="logo">
                <img class="union" src="union0.svg" />
                <div class="niion">NIION Inc.</div>
            </div>
            <div class="button-group">
                <div class="button">
                <div class="button-text2">Home</div>
                </div>
                <div class="button">
                <div class="button-text2">About Us</div>
                </div>
                <div class="button">
                <div class="button-text2">Services</div>
                </div>
                <div class="button">
                <div class="button-text2">Blog</div>
                </div>
            </div>
            <div class="button2">
                <div class="text">Contact Us</div>
            </div>
            </div>
        </div>
        <div class="content-container1">
            <div class="tag-container1">
            <div class="tag-text">AgriTech</div>
            </div>
            <div class="tag-container1">
            <div class="tag-text">Eco-Friendly</div>
            </div>
            <div class="tag-container1">
            <div class="tag-text">Precision Farming</div>
            </div>
            <div class="tag-container1">
            <div class="tag-text">Sustainable Farming</div>
            </div>
            <div class="tag-container1">
            <div class="tag-text">Soil Health</div>
            </div>
            <div class="tag-container1">
            <div class="tag-text">Natural Fertilizers</div>
            </div>
        </div>
        </div>

    </ScrollPage>
    );
};

export default HeroPage;