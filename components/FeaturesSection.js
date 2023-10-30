import Image from 'next/image';

import { FEATURES } from '../constants';


const FeaturesSection = () => {
    return (
        <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
            <div className="max-container padding-container relative w-full flex justify-end">
                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image src="/phone.png" alt="phone" width={440} height={1000} className="feature-phone" />
                </div>
                <div className="flex flex-col w-full z-20 lg:w-[60%] xl:w-[65%]">
                    <div className="relative">
                        <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" />
                        <h2 className="bold-40 lg:bold-64">Our Features</h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
                        {FEATURES.map(feature => (
                            <FeatureItem 
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title} 
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const FeatureItem = ({ title, icon, description }) => {
    return (
        <li className="flex flex-1 flex-col items-start w-full">
            <div className="rounded-full p-4 lg:p-7 bg-green-50">
                <Image src={icon} alt="map" width={28} height={28} />
            </div>
            <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
            <p className="regular-16 mt-5 bg-white/80 text-gray-50 lg:mt-[30px] lg:bg-none">{description}</p>
        </li>
    )
}

export default FeaturesSection;