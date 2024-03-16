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

export const MobileMenu = () => {
    return (
        <div className= "mobile-menu  bg-[#2C2830] burger-menu absolute w-full h-[587px]  z-50 ">
            <div className=" relative z-10 flex flex-col pt-10 gap-y-10 text-center text-white font-karla font-bold text-[20px]">
                {navs.map(({ id, title, url }) => (
                    <li key={id} className="hover:text-black list-none ">
                        <a href={url}>{title}</a>
                    </li>
                ))}
                <a href="#" className="border w-[323px] mx-auto py-3 border-white hover:text-black hover:bg-white">VIEW PLANS</a>
            </div>
            <img src="/GroupMobile.png" className="bottom-0 absolute w-screen max-h-[200px]" alt="" />
        </div>
    )
}