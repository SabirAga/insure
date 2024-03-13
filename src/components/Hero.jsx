import { useState, useEffect } from "react"
import { HeroMobile } from "./HeroMobile";
import { HeroDesktop } from "./HeroDesktop";

export const Hero = () => {

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
            {windowWidth < 768 && <HeroMobile/>}
            {windowWidth >= 768 && <HeroDesktop />}
        </div>
        </>
    )
}