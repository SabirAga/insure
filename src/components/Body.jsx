const DIFFERENCES = [
    {
        id: 1,
        src: "src/assets/circle1.svg",
        title: 'Snappy Process',
        description: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
    },
    {
        id: 2,
        src: "src/assets/circle2.svg",
        title: 'Affordable Prices',
        description: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
    },
    {
        id: 3,
        src: "src/assets/circle3.svg",
        title: 'People First',
        description: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
    },
]

export const Body = () => {
    return (

        <>
            <div className="px-6 mt-[200px] md:px-20 lg:px-[165px] text-center md:text-center">
                <div className="grid justify-items-center md:justify-items-stretch">
                    <img src="src/assets/Rectangle1.png" className="mx-auto  lg:left-[165px]" alt="" />
                    <div className="mb-20">
                        <h1 className="text-5xl font-dm md:text-7xl mt-[50px] lg:text-start">We're different</h1>
                    </div>
                    <div className="">
                        <div className="mt-[50px] md:grid md:grid-cols-2 md:text-center lg:flex lg:justify-between  ">
                            {DIFFERENCES.map(({ id, src, title, description }) => (
                                <li className={`list-none w-[350px] grid justify-items-center lg:justify-items-start ${(id === 1) ? 'col-start-1 row-start-1' : (id === 2 ) ? 'col-start-3 row-start-1' : (id === 3) ? 'col-start-2 row-start-2' : ''}`} key={id}>
                                    <div>
                                        <img src={src} alt={title} />
                                    </div>
                                    <div className="">
                                        <p className="font-dm font-bold text-[28px] pt-8">{title}</p>
                                        <p className="pb-4 font-karla text-[#837D88] mb-14">{description}</p>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="h-[344px] bg-[#2D2641] lg:h-[250px] py-[69px] px-[81px] text-white mt-[130px] relative">
                        <div className="grid lg:flex items-center justify-between">
                            <div className="text-[40px] font-dm font-bold  md:text-[56px] grid ">
                                <h1 className="mb-10 leading-10 md:leading-tight md:text-center lg:w-[475px] lg:leading-none text-start relative z-10">Find out more about how we work</h1>
                            </div>
                            <div>
                                <button className="border-2 relative z-10 border-white py-3 px-6 hover:text-black hover:bg-white">HOW WE WORK</button>
                            </div>
                        </div>
                        <div className="absolute top-0 md:right-0">
                            <img className="h-[344px] lg:h-fit md:max-h-full" src="src/assets/Group 10.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}