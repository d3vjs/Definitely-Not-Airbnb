import Image from 'next/image';
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon
 } from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">   
                <Image src="/assets/airbnb-logo-only.png" objectFit="contain"
                    objectPosition="left" layout="fill"/>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="pl-5 flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Start Your Search" />
                <SearchIcon className="h-8 hidden md:inline-flex cursor-pointer bg-red-400 text-white rounded-full p-2 md:mx-2"/>
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer"/>
                <div className="flex rounded-full items-center space-x-2 border-2 p-2">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
        </header>
        
    )
}

export default Header
