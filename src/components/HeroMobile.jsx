export const HeroMobile = () => {
    return (
        <>
            <div className="bg-[#2D2641] w-screen  text-white relative text-center" >
                <img src="/BitmapMobile.jpg" className="w-screen z-20 relative" alt="" />
                <img src="/GroupHeroMobile1.svg" className="absolute z-10 bottom-44" alt="" />
                <div className="flex flex-col mx-6 pt-[93px] relative z-50">
                    <div className=" text-5xl font-dm font-bold ">
                        <h1>Humanizng</h1>
                        <h1>your insurance.</h1>
                    </div>
                    <p className="font-karla pt-4 pb-8">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                </div>
                    <button className="mb-[93px] text-sm font-karla font-bold border border-white px-7 py-3 z-10 hover:text-black hover:bg-white">VIEW PLANS</button>
            </div>
            <img src="/GroupMobileHero2.png" className="absolute right-0 -bottom-[600px]" alt="" />
        </>
    )
}