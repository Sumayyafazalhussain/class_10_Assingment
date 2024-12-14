import React from "react";
import Image from "next/image";

const Card = ()=>{
    return(
        <div className="bg-black flex-justify-center justify-center min-h-screen container-mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p1.jpg" alt="/p1.jpg" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>TOMB OF QUAID</h5>
                       <p className="text-white text-lg mt-3">The final resting place of Muhammad Ali Jinnah, the founder of Pakistan. Designed in a 1960s modernist style, it was completed in 1971.</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                        </div>
                        </div>

                        <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p2.webp" alt="/p2.webp" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>Minar-e-Pakistan</h5>
                       <p className="text-white text-lg mt-3 ">Minar-e-Pakistan is a national monument located in Iqbal Park, Lahore, Pakistan. The tower was built in the 1960s to commemorate the Lahore Resolution of 1940, which led to the creation of Pakistan.</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                        
                        </div>
                        </div>
                       
                        <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p3.jpg" alt="/p3.jpg" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>Badshahi-Masjid</h5>
                       <p className="text-white text-lg mt-3">The Badshahi Mosque in Lahore was commissioned by the sixth Mughal Emperor Aurangzeb. Constructed between 1671 and 1673, it was the largest mosque in the world upon construction. It is the second largest mosque in Pakistan and the fifth largest mosque in the world.
                       .</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                     
                        </div>
                        </div>

                        <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p4.jpg" alt="/p4.jpg" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>Skardu</h5>
                       <p className="text-white text-lg mt-3 ">Skardu is the main town of Baltistan along the wide bank of the river Indus. Skardu is the largest district of the Northern Areas.
                       .</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                        
                        </div>
                        </div>

                        <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p5.jpg" alt="/p5.jpg" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>Pakistan-Monument</h5>
                       <p className="text-white text-lg mt-3">The Pakistan Monument is a National Monument and Heritage Museum located on the Western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolise the unity of the Pakistani People.
                       .</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                       
                        </div>
                        </div>

                        <div className="Card">
                    <div className="p-5 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                       <Image src="/p6.jpg" alt="/p6.jpg" width={500} height={500} /></div>
                       <h5 className='text-white text-2xl md:text-3xl font-medium'>Hunza-Valley</h5>
                       <p className="text-white text-lg mt-3">The Hunza Valley is a remote region of Pakistan that has long been known for its natural beauty and fascinating culture. The valley is located in the Gilgit-Baltistan region, which borders Afghanistan and China. 
                       .</p>
                       <a href="#" className='text-center bg-white text-black py-2 rounded-lg font-semibold mt-4 hover:bg-slate-500 focus:scale-95 transition-all duration-200 ease-out'>Explore</a>
                        
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Card