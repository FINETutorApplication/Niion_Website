import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move, FadeOut } from "react-scroll-motion";
import arrow from "../../Assets/SVGs/arrow.SVG";
import React from "react";
import "./style.css";

const News = () => {
    return (
    <ScrollPage page={4} style={{ height: "1180px" }} animation={batch(FadeIn(0, 200), FadeOut(0, 200))}>
        <div class="newsletter-section">
        <div class="newsletter-row">
            <div class="frame-6">
            <div class="footer-title">Latest News</div>
            <div class="newsletter-column">
                <div class="newsletter-title">
                Stay Informed with Insights and Innovations in Agriculture
                </div>
                <div class="newsletter-text">
                Discover the latest trends, tips, and breakthroughs in the
                agricultural world. From sustainable practices to emerging
                technologies,
                </div>
            </div>
            </div>
            <div class="button-base">
            <div class="button-text">Read More</div>
            <div class="button-icon-container">
                <img class="button-icon" src={arrow} />
            </div>
            </div>
        </div>
        <div class="list">
            <div class="stories">
            <div class="image2">
                <div class="tag-container">
                <div class="tag-text">Technology &amp; Innovation</div>
                </div>
            </div>
            <div class="heading-and-subheading">
                <div class="heading">November 21, 2024</div>
                <div class="story-container">
                <div class="heading2">
                    How Precision Farming is Changing Agriculture
                </div>
                <div class="heading3">
                    Precision farming uses technology like GPS, sensors, and AI to
                    revolutionize agricultural practices. Learn how these innovations
                    are increasing productivity, reducing costs, and promoting
                    sustainable farming around the globe.
                </div>
                </div>
            </div>
            </div>
            <div class="stories">
                <div class="image2">
                <div class="tag-container2">
                <div class="tag-text">Sustainability</div>
                </div>
            </div>
            <div class="heading-and-subheading">
                <div class="heading">November 20, 2024</div>
                <div class="story-container">
                <div class="heading2">
                    The Importance of Soil Health in Sustainable Farming
                </div>
                <div class="heading3">
                    This article explores why soil health matters, how to assess it, and
                    what practices can improve it. From crop rotation to organic
                    fertilizers, discover strategies to maintain fertile land for years
                    to come.
                </div>
                </div>
            </div>
            </div>
            <div class="stories">
            <div class="image2">
                <div class="tag-container3">
                <div class="tag-text">Water Management</div>
                </div>
            </div>
            <div class="heading-and-subheading">
                <div class="heading">November 19, 2024</div>
                <div class="story-container">
                <div class="heading2">
                    Smart Irrigation: Saving Water, Boosting Yields
                </div>
                <div class="heading3">
                    Water scarcity is a growing concern for farmers worldwide. Learn how
                    smart irrigation systems powered by IoT devices and sensors are
                    helping farmers conserve water while improving crop growth.
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </ScrollPage>
    );
};

export default News;