import React from 'react'
import Slieder from './Slieder'
import ListSlider from './ListSlider'

const Overons = () => {
  return (
    <>
        <div className="flex flex-col justify-between p-4 h-screen">
            {/* list */}
            {/* <div className="links ">
                <ul className='flex flex-col lg:flex-row justify-between font-semibold text-[16px]'>
                    <li ><span className='text-[#3F0066]  text-lg mr-4'>+</span>Uitgebreid aanbod</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Kwaliteitsgarantie</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Deskundig advies</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Transparant</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Gemakkelijke financiering</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Uitgebreid aanbod</li>
                    <li ><span className='text-[#3F0066] font-bold text-lg mr-4'>+</span>Kwaliteitsgarantie</li>
                </ul>
            </div> */}
            <ListSlider/>
            
            <div className=" grid grid-cols-3 w-[80%] mx-auto">
                <div className=''>
                    <div className='text-[24px] font-semibold'>Nieuw binnen</div>
                    <div className='text-[45px] leading-none'>Ons <span className='text-[#3F0066] leading-0'>aanbod</span> al gezien?</div>
                </div>
                <div className='text-16px'>
                Bij {"<"}Bedrijfsnaam{">"} hebben we een uitgebreid en divers assortiment occasions op voorraad. U bent van harte welkom in onze showroom. We raden u aan om van tevoren contact met ons op te nemen, zodat we u alle aandacht kunnen geven die u verdient.
                </div>
                <div className='flex items-center justify-center'>
                <button className='rounded-md px-3 py-2 bg-transparent border border-black shadow-md '>Oons aanbod</button>

                </div>
            </div>
            <Slieder/>
      
        </div>

    </>
    )
}

export default Overons