import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Move } from "react-scroll-motion";
import HeroPage from '../Components/HeroPage';
import AboutUs from '../Components/AboutUs';
import Achivements from '../Components/Achivements';
import Services from '../Components/Services';
import Branding from '../Components/Branding';
import News from '../Components/News';
// import FindTutorPage from '../Components/FindTuTorPage';
// import BestTutorsPage from '../Components/BestTutorsPage';
// import AboutPage from '../Components/AboutPage';
import "./style.css";

const PageStructures = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }

    const handleDownloadClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <ScrollContainer>
            <HeroPage />
            <AboutUs />
            <Achivements />
            <Services />
            <Branding />
            <News />
            {/* <FindTutorPage />
            <BestTutorsPage />
            <AboutPage /> */}
        </ScrollContainer>
    );
}
export default PageStructures;