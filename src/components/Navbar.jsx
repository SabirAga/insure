import { useState } from "react"
import { MobileMenu } from "./MobileMenu";


const navs = [
    {
        id: 1,
        title: 'HOW WE WORK',
        url: '#'
    },
    {
        id: 2,
        title: 'BLOG',
        url: '#'
    },
    {
        id: 3,
        title: 'ACCOUNT',
        url: '#'
    },
]

export const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const openMenu = () => {
        setMobileMenu(!mobileMenu)
    };

    const closed = "text-2xl px-[5.5px] border-2 border-black focus:outline-none text:black"
    const open = "text-2xl px-[10px] border-2 border-black focus:outline-none text:black"
    return (
        <div className="">
            <div className="flex justify-between items-center px-6 md:px-40 py-7">
                <img src="src/assets/INSURE.svg" className="" alt="" />
                <div className="hidden md:flex justify-between items-center gap-x-7 font-karla text-[13px] text-[#837D88] ">
                    {navs.map(({ id, title, url }) => (
                        <li key={id} className="hover:text-black list-none">
                            <a href={url}>{title}</a>
                        </li>
                    ))}
                    <a href="#" className="border px-7 py-3 border-black hover:text-white hover:bg-black">VIEW PLANS</a>
                </div>
            </div>

            <div className=" z-50  text-right md:hidden font-karla text-[13px] text-[#837D88]">
                    {mobileMenu && <MobileMenu />}
                <div className="top-4 right-6 absolute">
                    <button
                        onClick={openMenu}
                        className={` ${!mobileMenu ? closed : open}`}>{!mobileMenu ? '☰' : 'x'}
                    </button>
                </div>
            </div>
        </div>
    )
}