import Image from 'next/image';


const GuideSection = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image src="/camp.svg" alt="camp" width={50} height={50} />
                <p className="uppercase regular-18 text-green-50 -mt-1 mb-3">We are here for you</p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[400px]">Guide you to easy path</h2>
                    <p className="self-center regular-16 text-gray-30 xl:max-w-[520px]">
                        Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain.
                    </p>
                </div>
            </div>
            <div className="flexCenter max-container relative w-full">
                <Image src="/boat.png" alt="boat" width={1440} height={580} className="w-full object-cover object-center 2xl:rounded-5xl" />
                <div className="absolute flex bg-white pl-5 pr-7 py-8 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image src="/meter.svg" alt="meter" width={16} height={158} className="w-auto h-full" />
                    <div className="flexBetween flex-col">
                        <div className="w-full flex flex-col">
                            <div className="w-full flexBetween">
                                <p className="regular-16 text-gray-20">Destination</p>
                                <p className="bold-16 text-green-50">48 mins</p>
                            </div>
                            <p className="bold-20 mt-2">Aguas Calientes</p>
                        </div>
                        <div className="w-full flex flex-col">
                            <p className="regular-16 text-gray-20">Start track</p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GuideSection;