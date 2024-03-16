export const FooterMobile = () => {
    return (
        <>
            <div className="bg-[#FAFAFA] mt-36 ">
                <img src="/Group 22.png" className="absolute" alt="" />
                <div className="relative z-50 grid justify-items-center pt-16">
                    <img className="" src="src/assets/INSURE.svg" alt="INSURE" />
                    <ul className="flex gap-x-4 my-8 ">
                        <a href="#"><img src="/fb.svg" alt="" /></a>
                        <a href="#"><img src="/twitter.svg" alt="" /></a>
                        <a href="#"><img src="/pint.svg" alt="" /></a>
                        <a href="#"><img src="/inst.svg" alt="" /></a>
                    </ul>
                </div>
                <div className="border-b pb-9 border-[#DADADA]"></div>
                <div className="grid justify-items-center z-10 font-karla text-center py-12 gap-10">
                    <div className="">
                        <p className="mb-9 text-[#837D88]">OUR COMPANY</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">HOW WE WORK</a>
                            <a href="#">WHY INSURE?</a>
                            <a href="#">VIEW PLANS</a>
                            <a href="#">REVIEWS</a>
                        </ul>
                    </div>
                    <div >
                        <p className="mb-9 text-[#837D88]">HELP ME</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">FAQ</a>
                            <a href="#">TERMS OF USE</a>
                            <a href="#">PRIVACY POLICY</a>
                            <a href="#">COOKIES</a>
                        </ul>
                    </div>
                    <div >
                        <p className="mb-9 text-[#837D88]">CONTACT</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">SALES</a>
                            <a href="#">SUPPORT</a>
                            <a href="#">LIVE CHAT</a>
                        </ul>
                    </div>
                    <div className="" >
                        <p className="mb-9 text-[#837D88]">OTHERS</p>
                        <ul className="flex flex-col gap-y-4">
                            <a href="#">CAREERS</a>
                            <a href="#">PRESS</a>
                            <a href="#">LICENSES</a>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}