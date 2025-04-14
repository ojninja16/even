export default function  Doctorcard({src,backgroundColor,name,experience,qualification,previousExp,shortName}){
    return(
        <div className="w-[300px] h-[450px] bg-transparent rounded-lg  overflow-hidden mx-2 flex flex-col"
        style={{
            boxShadow: '10px 10px rgba(0, 0, 0, 1)', 
          }}>
            <div className="relative top-10 h-[250px] w-[250px] rounded-full flex items-center justify content" style={{backgroundColor:backgroundColor}}>
                <img src={src} alt="doctor" sizes="160px" objectfit="contain" className="w-full h-full object-center object-contain"/> 
            </div>
            <div className="p-4 flex-1 flex flex-col z-5 bg-white">
                <h3 className="text-lg font-semibold text-black">{name}</h3>
                <p className=" text-sm text-gray-600">{experience}</p>
                <p className="text-xs text-gray-600">{qualification}</p>
                <div className="mt-auto mb-2">
                    <h4 className="text-md font-semibold text-gray-700">Previous Experience</h4>
                    <ul className=" list-disc list-inside text-xs font-medium text-gray-700">
                        {previousExp.map((item,index)=>(
                            <li key={{index} }className=" font-light truncate"> {item}</li>
                        ))} 
                    </ul>

                </div>
            </div>
        </div>
    )
}
    