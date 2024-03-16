export const HeroDesktop = () => {
    return (
        <>
            <div className="bg-[#2D2641] text-white h-[600px] pl-20 lg:pl-[165px] pt-[105px] relative">
                <img src="/Rectangle.png" alt="" />
                <img className="z-10 absolute lg:right-0 lg:top-0 hidden lg:block" src="/Group 17.png" alt="" />
                <div className="z-50 text-wrap">
                    <div className="font-dm text-7xl pt-[63px]  mb-4">
                        <h1>Humanizng</h1>
                        <h1>your insurance.</h1>
                    </div>
                    <div className="font-karla text-base  max-w-[500px] lg:max-w-[540px] ">
                        <p className="">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                        <button className="mt-7 p border border-white px-7 py-3 z-10 hover:text-black hover:bg-white">VIEW PLANS</button>
                    </div>
                    <div className="absolute top-16  right-4 lg:right-[165px] lg:top-[105px]">
                        <img className="z-10 h-[470px] lg:h-fit" src="/Bitmap.jpg" alt="" />
                    </div>
                </div>
                <img className="z-10 absolute left-0" src="/Group 18.png" alt="" />
            </div>
        </>
    )
}