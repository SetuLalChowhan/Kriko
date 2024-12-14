import React from 'react'
import dogPet from '../../assets/images/petBanner.png'
import leg1 from '../../assets/images/leg-2.png'
import leg2 from '../../assets/images/leg-1.png'
import Dog from '../../assets/images/dogImage.png'

const PetBanner = () => {
    return (
        //     <div
        //     style={{
        //       backgroundImage: `url(${dogPet})`,
        //       backgroundSize: "cover",
        //       backgroundPosition: "center",
        //     }}
        //     className="w-full h-[490px] z-20  "
        //   >
        //     <div className='container flex  relative h-[60%]'>
        //         {/* left side */}
        //         <div className='   flex flex-col gap-[24px] items-start mt-32   '>
        //             <h1 className='text-[44px] font-fredoka font-medium text-white max-w-[400px]'>Get the Best for Your Pet</h1>
        //             <p className='text-[24px] text-[#E8E8E8] font-[400] max-w-[600px] '>Browse our collection of toys, treats, and essentials that your pet will love.</p>
        //             <button className='py-[16px] px-[24px] bg-[#FFF] font-medium text-[24px] border-none outline-none flex gap-[10px] rounded-[40px]' >
        //             <p className='text-[#4877D1]'>Shop Merchandise</p>
        //             <div>
        //             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        //   <path opacity="0.4" d="M19.9987 36.6668C29.2034 36.6668 36.6654 29.2049 36.6654 20.0002C36.6654 10.7954 29.2034 3.3335 19.9987 3.3335C10.794 3.3335 3.33203 10.7954 3.33203 20.0002C3.33203 29.2049 10.794 36.6668 19.9987 36.6668Z" fill="#4877D1"/>
        //   <path d="M26.718 19.1169L21.718 14.1169C21.2346 13.6336 20.4346 13.6336 19.9513 14.1169C19.468 14.6002 19.468 15.4002 19.9513 15.8836L22.818 18.7502H14.168C13.4846 18.7502 12.918 19.3169 12.918 20.0002C12.918 20.6836 13.4846 21.2502 14.168 21.2502H22.818L19.9513 24.1169C19.468 24.6002 19.468 25.4002 19.9513 25.8836C20.2013 26.1336 20.518 26.2502 20.8346 26.2502C21.1513 26.2502 21.468 26.1336 21.718 25.8836L26.718 20.8836C27.2013 20.4002 27.2013 19.6002 26.718 19.1169Z" fill="#4877D1"/>
        // </svg>
        //             </div>

        //             </button>

        //         </div>

        //         {/* right side */}
        //         <div  className='  absolute -top-[30%] left-[35%]  '>
        //             <img src={Dog} className='w-full h-auto block' />

        //         </div>

        //     </div>


        //   </div>
        <div className=' mt-20 mb-20 bg-[#507ca3] relative  ' >

            <div className=' container'>
                <div className=' flex  '>
                    {/* left side */}
                    <div className='   flex flex-col gap-[35px] items-start lg:w-1/3 w-full mt-16 pb-11   '>
                        <h1 className='text-[44px] font-fredoka font-medium text-white '>Get the Best for Your Pet</h1>
                        <p className='text-[24px] text-[#E8E8E8] font-[400] '>Browse our collection of toys, treats, and essentials that your pet will love.</p>
                        <button className='py-[16px] px-[24px] bg-[#FFF] font-medium text-[24px] border-none outline-none flex gap-[10px] rounded-[40px]' >
                            <p className='text-[#4877D1]'>Shop Merchandise</p>
                            <div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.4" d="M19.9987 36.6668C29.2034 36.6668 36.6654 29.2049 36.6654 20.0002C36.6654 10.7954 29.2034 3.3335 19.9987 3.3335C10.794 3.3335 3.33203 10.7954 3.33203 20.0002C3.33203 29.2049 10.794 36.6668 19.9987 36.6668Z" fill="#4877D1" />
                                    <path d="M26.718 19.1169L21.718 14.1169C21.2346 13.6336 20.4346 13.6336 19.9513 14.1169C19.468 14.6002 19.468 15.4002 19.9513 15.8836L22.818 18.7502H14.168C13.4846 18.7502 12.918 19.3169 12.918 20.0002C12.918 20.6836 13.4846 21.2502 14.168 21.2502H22.818L19.9513 24.1169C19.468 24.6002 19.468 25.4002 19.9513 25.8836C20.2013 26.1336 20.518 26.2502 20.8346 26.2502C21.1513 26.2502 21.468 26.1336 21.718 25.8836L26.718 20.8836C27.2013 20.4002 27.2013 19.6002 26.718 19.1169Z" fill="#4877D1" />
                                </svg>
                            </div>

                        </button>

                    </div>

                    {/* right side */}
                    <div className='md:block hidden relative xl:left-48 left-24 border-2 border-red-500 '>


                        <img src={Dog} className='h-full block top-0 xl:w-[70%] lg:w-[60%]  ' />



                    </div>
                </div>

            </div>

        </div>
    )
}

export default PetBanner