import '../App.css'
const About = () => {
  return (
    <>
        <div className="min-h-screen w-full bg-[#1E1B1B] text-white relative">
            <div className="flex flex-col items-center pt-[4em] gap-y-3">
                        <div className="text-[24px] text-base">Onze diensten</div>
                        <div className="text-[34px] ">Dit bieden we aan</div>
            </div>
            <div className="About-cards z-[1] mt-[70px] ">
                <button className="absolute top-[200px] left-[45%] mx-auto z-[10] px-4 py-2 border border-[#A465F657] bg-[#1E1B1B] rounded-md hover:bg-[#a465f6d2] transition-all duration-200">Bekijk diensten</button>
                <div className="w-[90%] mx-auto grid grid-cols-4 gap-x-4 ">
                    <div className="card flex">
                        <img src="../../public/Vector 51.svg" alt="" />
                        <div className='pt-[100px] px-5'>
                            <h1 className='text-[24px] text-[#737070] font-light opacity-[0.9] '>Garantie</h1>
                                    <div className='text-[#737070] text-[16px]'>Als BOVAG-lid bieden wij voordelen voor u als koper. Hoewel al onze auto's grondig worden geïnspecteerd, kan het onverhoopt gebeuren dat er na de aankoop een gebrek optreedt. Geen zorgen, wij staan voor u klaar. Wat betekent BOVAG-garantie?</div>
                                    <div className='mt-3'>
                                        <img className='rounded-lg h-[280px] opacity-[0.5] hover:opacity-[1] transition-all'  src="../../public/about/aboutcard.png" alt="" />
                                    </div>

                        </div>
                        
                    </div>
                    <div className="card flex">
                        <img src="../../public/Vector 51.svg" alt="" />
                        <div className='pt-[100px] px-5'>
                                    <div className='my-3'>
                                        <img className='rounded-lg h-[246px] w-full opacity-[0.5] hover:opacity-[1] transition-all'  src="../../public/about/aboutcard2.png" alt="" />
                                    </div>
                            <h1 className='text-[24px] text-[#737070] font-light opacity-[0.9] mt-8'>Financiering / Lease</h1>
                                    <div className='text-[#737070] text-[16px]'>Als BOVAG-lid bieden wij voordelen voor u als koper. Hoewel al onze auto's grondig worden geïnspecteerd, kan het onverhoopt gebeuren dat er na de aankoop een gebrek optreedt. Geen zorgen, wij staan voor u klaar. Wat betekent BOVAG-garantie?</div>

                        </div>
                        
                    </div>
                    <div className="card flex">
                        <img src="../../public/Vector 51.svg" alt="" />
                        <div className='pt-[100px] px-5'>
                            <h1 className='text-[24px] text-[#FCE6A4] font-light opacity-[0.9]'>Inkoop/taxatie</h1>
                                    <div className='text-[#737070] text-[16px]'>Overweegt u om uw auto te verkopen? Mogelijk kunnen wij u van dienst zijn. Via onze website kunt u snel en gemakkelijk uw auto laten taxeren en verkopen. Onze aanpak is eenvoudig. Bij {"<"}Bedrijfsnaam{">"} maken we het taxeren en verkopen van uw auto makkelijk voor u.</div>
                                    <div className='mt-3'>
                                        <img className='rounded-lg h-[300px] opacity-[0.5] hover:opacity-[1] transition-all'  src="../../public/about/aboutcard3.png" alt="" />
                                    </div>

                        </div>
                        
                    </div>
                    <div className="card flex">
                        <img src="../../public/Vector 51.svg" alt="" />
                        <div className='pt-[100px] px-5'>
                                    <div className='mt-3'>
                                        <img className='rounded-lg opacity-[0.5] hover:opacity-[1] transition-all'  src="../../public/about/aboutcard4.png" alt="" />
                                    </div>
                            <h1 className='text-[24px] text-[#737070] font-light opacity-[0.9]'>Garantie</h1>
                                    <div className='text-[#737070] text-[16px]'>Als BOVAG-lid bieden wij voordelen voor u als koper. Hoewel al onze auto's grondig worden geïnspecteerd, kan het onverhoopt gebeuren dat er na de aankoop een gebrek optreedt. Geen zorgen, wij staan voor u klaar. Wat betekent BOVAG-garantie?</div>

                        </div>
                        <img src="../../public/Vector 51.svg" alt="" />
                        
                    </div>
              
            
                    
                </div>
            </div>
        </div>
    </>

)
}

export default About