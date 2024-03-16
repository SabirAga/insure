const DIFFERENCES = [
    {
        id: 1,
        src: "/circle1.svg",
        title: 'Snappy Process',
        description: 'Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.',
    },
    {
        key: 2,
        src: "/circle2.svg",
        title: 'Affordable Prices',
        description: 'We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.',
    },
    {
        key: 3,
        src: "/circle3.svg",
        title: 'People First',
        description: 'Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.',
    },
]

export const Body = () => {
    return (
        <>
            <div className="mt-[250px] px-[165px]">
                <img src="/Rectangle1.png" alt="" />
                <div>
                    <h1 className="font-dm text-7xl mt-[50px]">We're different</h1>
                </div>
                <div className="mt-[50px] flex justify-between">
                    {DIFFERENCES.map(({ id, src, title, description }) => (
                        <li className="list-none w-[350px]" key={id}>
                            <div>
                                <img src={src} alt={title} />
                            </div>
                            <div>
                                <p className="font-dm font-bold text-[28px] pt-8">{title}</p>
                                <p className="pb-4 font-karla text-[#837D88]">{description}</p>
                            </div>
                        </li>
                    ))}
                </div>
                <div className="bg-[#2D2641] h-[250px] py-[69px] px-[81px] text-white mt-[150px] relative">
                    <div className="flex items-center justify-between">
                        <div className="font-dm font-bold text-[56px] grid gap-y-0">
                            <h1 className="-mb-[1.5rem]">Find out more</h1>
                            <h1>about how we work</h1>
                        </div>
                        <div>
                            <button className="border-2 relative z-10 border-white py-3 px-6">HOW WE WORK</button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0">
                        <img className="max-h-full" src="/Group 10.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}