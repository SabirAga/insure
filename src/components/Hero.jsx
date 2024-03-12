<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>

export const Hero = () => {
    return (
        <>
            <div className="bg-[#2D2641] text-white h-[600px] pl-[165px] pt-[105px] relative">
                <img src="src/assets/Rectangle.png" alt="" />
                <img className="z-10 absolute right-0 top-0" src="src/assets/Group 17.png" alt="" />
                <div className="z-50">
                    <div className="font-dm text-7xl pt-[63px] mb-4">
                        <h1>Humanizng</h1>
                        <h1>your insurance.</h1>
                    </div>
                    <div className="font-karla text-base  w-[540px] h-[84px]">
                        <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                        <button className="mt-7 p border border-white px-7 py-3 z-10">VIEW PLANS</button>
                    </div>
                </div>
                <div className="absolute right-[165px] top-[105px]">
                    <img className="object-cover z-10" src="src/assets/Bitmap.jpg" alt="" />
                </div>
                <img className="z-10 absolute left-0" src="src/assets/Group 18.png" alt="" />
            </div>
        </>
    )
}