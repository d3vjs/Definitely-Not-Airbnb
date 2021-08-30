import Image from 'next/image';

function MediumCard({ img, title }) {
    return (
        // cursor-pointer hover:scale-105
        // transform transition duration-300 ease-out
        <div className="flex flex-col cursor-pointer hover:scale-105 px-3 md:px-0 transform transition duration-300 ease-out">
            <Image src={img} width="256" height="256" className="relative rounded-xl" />
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
