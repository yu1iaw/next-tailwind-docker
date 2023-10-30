import Image from 'next/image';

import Button from "./Button";


const GetAppSection = () => {
    return (
        <section className="flexCenter w-full flex-col pb-[100px]">
             <div className="get-app">
                <div className="flex flex-1 flex-col items-start justify-center w-full gap-12 z-20">
                    <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
                    <p className="regular-16 text-gray-10">Available on iOS and Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="Download App"
                            icon="/apple.svg"
                            variant="btn_white"
                            full
                        />
                        <Button 
                            type="button"
                            title="Download App"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>
                <div className="flex flex-1 justify-end items-center">
                    <Image src="/phones.png" alt="phones" width={550} height={870} />
                </div>
             </div>
        </section>
    )
}

export default GetAppSection;