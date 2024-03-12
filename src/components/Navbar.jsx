<link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>

export const Navbar = ()=>{
    return (
        <>
        <div className="flex justify-between items-center px-40 py-7 ">
            <img src="src/assets/INSURE.svg" alt="" />
            <div className="flex justify-between items-center gap-x-7 font-karla text-[13px]">
                <a href="#">HOW WE WORK</a>
                <a href="#">BLOG</a>
                <a href="#">ACCOUNT</a>
                <a href="#" className="border px-7 py-3 border-black">VIEW PLANS</a>
            </div>
        </div>
        </>
    )
}