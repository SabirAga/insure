import { useState, useEffect } from "react";

import { FooterMobile } from "./FooterMobile";
import { FooterDesktop } from "./FooterDesktop";


export const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <><div>
            {windowWidth < 768 && <FooterMobile/>}
            {windowWidth >= 768 && <FooterDesktop />}
        </div>
        </>
    )
} 
