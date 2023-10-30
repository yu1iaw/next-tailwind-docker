import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants';


const Footer = () => {
    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col justify-center items-start gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                    </Link>
                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FOOTER_LINKS.map(columns => (
                            <FooterColumn title={columns.title} key={columns.title}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                    { columns.links.map(l => (
                                        <Link href="/" key={l}>{l}</Link>
                                    )) }
                                </ul>
                            </FooterColumn>
                        ))}
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map(l => (
                                    <Link href="/" key={l.label} className="flex gap-4 md:flex-col lg:flex-row">
                                        <p className="whitespace-nowrap">{l.label}:</p>
                                        <p className="whitespace-nowrap medium-14 text-blue-70">{l.value}</p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map(l => (
                                        <Link href="/" key={l} >
                                            <Image src={l} alt="logo" width={24} height={24} />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
            </div>
        </footer>
      
    )
}

const FooterColumn = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            { children }
        </div>
    )
}

export default Footer;