import {
    CurrencyDollarIcon,
    LinkIcon,
    GlobeAltIcon
} from '@heroicons/react/outline'

function Footer() {
    return (
        <footer className="flex flex-col px-12 border-t-2 justify-center border-gray-300 bg-gray-200">
            <div className="w-full py-6 flex flex-row flex-wrap max-w-6xl justify-between">
                <span className="flex flex-col py-6">
                    <h2 className="text-lg uppercase mb-2 font-extrabold">About</h2>
                    <ul>
                        <li>How Airbnb works</li>
                        <li>Newsroom</li>
                        <li>Airbnb 2021</li>
                        <li>Investors</li>
                        <li>Airbnb Plus</li>
                        <li>Airbnb Luxe</li>
                        <li className="lg: hidden">HotelTonight</li>
                        <li className="lg: hidden">Airbnb for Work</li>
                        <li className="lg: hidden">Made possible by Hosts</li>
                        <li className="lg: hidden">Careers</li>
                        <li className="lg: hidden">Founders&apos; Letter</li>
                    </ul>
                </span>
                <span className="flex flex-col py-6">
                    <h2 className="text-lg uppercase mb-2 font-extrabold">Community</h2>
                    <ul>
                        <li>Diversity & Belonging</li>
                        <li>Accessibility</li>
                        <li>Airbnb Associates</li>
                        <li>Frontline Stays</li>
                        <li>Guest Referrals</li>
                        <li>Airbnb.org</li>
                    </ul>
                </span>
                <span className="flex flex-col py-6">
                    <h2 className="text-lg uppercase mb-2 font-extrabold">Host</h2>
                    <ul>
                        <li>Host your home</li>
                        <li>Host an Online Experience</li>
                        <li>Host an Experience</li>
                        <li>Responsible hosting</li>
                        <li>Resource Centre</li>
                        <li>Community Centre</li>
                    </ul>
                </span>
                <span className="flex flex-col py-6">
                    <h2 className="text-lg uppercase mb-2 font-extrabold">Support</h2>
                    <ul>
                        <li>Our COVID-19 Response</li>
                        <li>Help Centre</li>
                        <li>Cancellation options</li>
                        <li>Neighbourhood Support</li>
                        <li>Trust & Safety</li>
                    </ul>
                </span>
            </div>
            <span className="border-t-2 flex-row-reverse border-gray-400 w-full justify-between flex py-12">
                <span className="flex flex-col items-center">
                    <GlobeAltIcon className="h-8"/>
                    English
                </span>
                <p>
                    &copy; 2021{" "}
                    <a href="#" target="_blank" rel="noreferrer">
                        Dev David
                    </a>
                </p>
            </span>
        </footer>
    )
}

export default Footer
