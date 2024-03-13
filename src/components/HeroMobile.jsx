export const HeroMobile = () => {
    return (
        <>
            <div className="bg-[#2D2641] w-screen  text-white relative text-center" >
                <img src="src/assets/BitmapMobile.jpg" className="w-screen" alt="" />
                <div className="flex flex-col mx-6 pt-[93px]">
                    <div className=" text-5xl font-dm font-bold ">
                        <h1>Humanizng</h1>
                        <h1>your insurance.</h1>
                    </div>
                    <p className="font-karla pt-4 pb-8">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                </div>
                    <button className="mb-[93px] text-sm font-karla font-bold border border-white px-7 py-3 z-10 hover:text-black hover:bg-white">VIEW PLANS</button>
            </div>
        </>
    )
}