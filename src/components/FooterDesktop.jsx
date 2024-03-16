export const FooterDesktop = () => {
    return (
        <div className="relative">
            <img src="/Group 22.png" className="absolute" alt="" />
            <div className="h-[393px] bg-[#FAFAFA] mt-[110px] lg:px-[165px] px-20  py-16 ">
                <div className="flex justify-between items-center relative z-10">
                    <img src="/INSURE.svg" alt="INSURE" />
                    <ul className="flex justify-between gap-x-4">
                        <a href="#"><img src="/fb.svg" alt="" /></a>
                        <a href="#"><img src="/twitter.svg" alt="" /></a>
                        <a href="#"><img src="/pint.svg" alt="" /></a>
                        <a href="#"><img src="/inst.svg" alt="" /></a>
                    </ul>
                </div>
                <div className="border-b-2 pb-9 border-[#DADADA]"></div>
                <div className="flex relative z-10 font-karla text-[13px] mt-12">
                    <div className="w-[255px]">
                        <p className="mb-9 text-[#837D88]">OUR COMPANY</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">HOW WE WORK</a>
                            <a href="#">WHY INSURE?</a>
                            <a href="#">VIEW PLANS</a>
                            <a href="#">REVIEWS</a>
                        </ul>
                    </div>
                    <div className="w-[255px]">
                        <p className="mb-9 text-[#837D88]">HELP ME</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">FAQ</a>
                            <a href="#">TERMS OF USE</a>
                            <a href="#">PRIVACY POLICY</a>
                            <a href="#">COOKIES</a>
                        </ul>
                    </div>
                    <div className="w-[255px]">
                        <p className="mb-9 text-[#837D88]">CONTACT</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">SALES</a>
                            <a href="#">SUPPORT</a>
                            <a href="#">LIVE CHAT</a>
                        </ul>
                    </div>
                    <div className="w-[255px]">
                        <p className="mb-9 text-[#837D88]">OTHERS</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">CAREERS</a>
                            <a href="#">PRESS</a>
                            <a href="#">LICENSES</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}