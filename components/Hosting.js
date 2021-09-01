import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', e => updateTarget(e))
    
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
          setTargetReached(true)
        }
    
        return () => media.removeEventListener('change', e => updateTarget(e))
      }, [])
  
    return targetReached;
  };

function Hosting() {
    const isBreakpoint = useMediaQuery(640)
    return (
        <div className="relative h-96 min-w-[300px]">
            { isBreakpoint ? <Image layout="fill" src="/assets/host-sm.jpg" objectFit="cover" className="rounded-2xl" /> : <Image layout="fill" src="/assets/host.jpg" objectFit="cover" className="rounded-2xl" />}
            {/* <span className="flex flex-col items-start">
                <h2 className="font-extrabold mb-7">Try Hosting</h2>
                <p className="mb-6">
                    Earn extra income and unlock new oppurtunities by sharing your space.
                </p>
                <a href="#" className="btn btn-light">
                    Learn more
                </a>
            </span> */}
            <div className="text-white absolute top-4 left-12 sm:top-32 sm:left-12">
                <h3 className="text-4xl mb-3 w-64">Try Hosting</h3>
                <p>Earn extra income and unlock new opportunities.</p>
                <button className="text-lg bg-white font-bold text-gray-800 px-4 py-2 rounded-lg mt-5">Learn more</button>
            </div>
        </div>
    )
}

export default Hosting
