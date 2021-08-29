import Image from 'next/image';

import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon
} from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 10) {
                console.log('scrollign')
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        // sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10"
        <header className={`fixed top-0 z-50 p-5 md:px-10 w-full ${scrolled && `bg-white shadow-md`}`}>
            <div className="mx-0 my-auto grid grid-cols-one sm:grid-cols-11 lg:grid-cols-121">
                {/* <div className="hidden sm:flex relative items-center h-10 cursor-pointer my-auto">
                    <Image src="/assets/airbnb-logo-only.png" objectFit="contain"
                        objectPosition="left" layout="fill" />
                </div> */}
                <div className="hidden sm:flex relative items-center h-10 cursor-pointer my-auto">
                    <svg className="h-8"
                        viewBox="0 0 256 276"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <path
                            d="M238 223.1a41 41 0 01-46 35c-7-.8-13.8-3-21-7.1-10-5.5-19.8-14-31.4-26.8 18.2-22.3 29.2-42.7 33.4-61 1.9-8.5 2.2-16.2 1.3-23.4a44.7 44.7 0 00-7.4-18.7 46.5 46.5 0 00-38.9-19.6c-16 0-30.3 7.4-38.9 19.6a44.8 44.8 0 00-7.4 18.7 57.3 57.3 0 001.3 23.5c4.2 18.2 15.5 38.9 33.4 61.2A123.8 123.8 0 0185 251.3c-7.2 4.1-14.1 6.3-21 7.1a41 41 0 01-46-35c-.9-6.9-.3-13.8 2.4-21.5.9-2.8 2.2-5.5 3.6-8.8l6.4-13.8.2-.6c19-41 39.5-83 60.7-123.8l.8-1.7 6.7-12.7c2.2-4.4 4.6-8.5 7.7-12a28.8 28.8 0 0144.1 0c3 3.5 5.5 7.6 7.7 12 2.2 4.2 4.4 8.6 6.7 12.7l.8 1.7c21 41 41.4 83 60.4 124.1v.3c2.2 4.4 4.1 9.4 6.3 13.8 1.4 3.3 2.8 6 3.6 8.8 2.2 7.2 3 14 2 21.2zm-110-13c-14.9-18.7-24.6-36.3-27.9-51.2a44.5 44.5 0 01-.8-16.9c.6-4.4 2.2-8.2 4.4-11.5 5.3-7.5 14-12.2 24.3-12.2 10.2 0 19.3 4.4 24.3 12.2 2.2 3.3 3.8 7.1 4.4 11.5.8 5 .5 10.8-.8 16.9-3.4 14.6-13 32.2-27.9 51.3zm124.4-14.3l-4.2-10-6.3-14-.3-.2c-19-41.4-39.4-83.3-61-124.7l-.8-1.7c-2.2-4.1-4.4-8.5-6.6-13-2.7-4.9-5.5-10.1-9.9-15.1a44.5 44.5 0 00-35-17.1C114.5 0 102 6 93 16.6a95 95 0 00-10 15.1l-6.6 13-.8 1.6c-21.2 41.4-42 83.3-61 124.7l-.2.6-6.4 14c-1.4 3-2.7 6.4-4.1 10a58.6 58.6 0 0062 79.4 72.8 72.8 0 0027.6-9.4c11.3-6.3 22-15.4 34.2-28.7a144.9 144.9 0 0034.2 28.7 72.9 72.9 0 0034.8 10 58.5 58.5 0 0058.2-50.2 52.1 52.1 0 00-2.5-29.6z"
                            fill={scrolled ? `#fc8181` : `#fff`}
                        />
                    </svg>
                    <span className={`font-semibold text-lg ml-2 ${scrolled ? `text-red-400` : `text-white`}`}>airbnb</span>
                </div>

                {scrolled ? <div className="flex items-center sm:border-2 rounded-full py-2 sm:shadow-sm">
                    <input className="pl-5 flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Where are you going?" />
                    <SearchIcon className="h-8 hidden sm:inline-flex cursor-pointer bg-red-400 text-white rounded-full p-2 md:mx-2" />
                </div> : <nav className="hidden text-white lg:flex items-center flex-1 justify-center transition-all space-x-6">
                    <a href="#" className="active">
                        Places to stay
                    </a>
                    <a href="#">Experiences</a>
                    <a href="#">Online Experiences</a>
                </nav>
                }
                <div className={`hidden lg:flex space-x-4 items-center justify-end ${scrolled ? `text-gray-500` : `text-white`}`}>
                    <p className="inline cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="inline h-6 cursor-pointer" />
                    <div className="flex rounded-full items-center space-x-2 border-2 p-2">
                        <MenuIcon className="h-6 cursor-pointer" />
                        <UserCircleIcon className="h-6 cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
