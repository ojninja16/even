import React,{useEffect} from 'react'
import DoctorCard from './DoctorCard'
export const DoctorSlider=({doctors})=>{
    const extendedDoctors=[...doctors,...doctors,...doctors]
    const sliderRef=React.useRef()

    const handleScroll=(direction)=>{
        if(!sliderRef.current) return;
        const scrollAmount= direction==="left"?-300:300
        const scrollContainer=sliderRef.current
        scrollContainer.scrollBy({
            left:scrollAmount,
            behavior:"smooth"
        })
    }
    useEffect(()=>{
        sliderRef.current.scrollLeft= sliderRef.current.scrollWidth/3
    },[])
    return(
        <div className='relative'>
            <div className="absolute right-4 top-2 flex-space-2 z-10 mb-4">
                <button className='bg-blue-600  rounded-full p-3 cursor-pointer' onClick={()=>handleScroll("left")}>
                    <i className="fa fa-arrow-left"></i>
                </button>
                <button className='bg-blue-600  rounded-full ' onClick={()=>handleScroll("right")}>
                    <i className="fas fa-arrow-right "></i>
                </button>
            </div>
            <div className='flex overflow-x-auto px-4 py-6 hide-scrollbar'
            ref={sliderRef}>
                <div className='flex space-6'>
                    {
                        extendedDoctors.map((doctor,index)=>{
                            const {key,...doctorprops}=doctor
                            return(
                                <div key={`doctor-${key}-${index}`}
                                    className='flex-shrink-0'
                                >
                                    <DoctorCard {...doctorprops}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <div className="absolute right-2.5 top-0.5 -translate-1.5 z-10 cursor-pointer">
                <button className='bg-blue-600  rounded-full ' onClick={()=>handleScroll("right")}>
                    <i className="fa fa-arrow-right "></i>
                </button>
            </div> */}
            <style jsx>{
                `
                .hide-scrollbar::-webkit-scrollbar {
                                display: none;}`}
                                
                </style>
        </div>
    )

}