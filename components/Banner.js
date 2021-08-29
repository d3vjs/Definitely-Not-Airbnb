import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
            <Image 
                src="/assets/hero.webp"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white rounded-full px-10 py-5 font-bold
                my-3 hover:shadow-xl shadow-md
                active:scale-90 transition duration-150
                ">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
