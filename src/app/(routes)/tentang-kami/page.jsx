'use client'
import React, { useEffect } from 'react'
import hero from '../../../../public/assets/Hero.svg'
import tentang from '../../../../public/assets/tentang.JPG'
import { FaBowlFood } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import Image from 'next/image';
import Lenis from 'lenis';

export default function page() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}, [])
  return (
    <section className='mt-[60px] w-full'>

      <div className='h-[50vh] w-full flex items-center justify-center' style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className='bg-black absolute opacity-35 h-[50vh] w-full '></div>
        <h1 className='text-5xl font-extrabold z-10 text-white'>Tentang Kami</h1>
      </div>

      <div className='mx-28 my-12 '>
        <div className='flex gap-12 items-end'>
          <h1 className='text-4xl  font-bold text-[#4F6C51]'>Lesahan Bakso Palapa <br /><span>Rasa Autentik</span></h1>
          <div className='flex justify-between w-full  '>
            <p className='text-justify w-[350px]'>Lesehan Bakso Palapa, tempat di mana cita rasa autentik bakso menyatu dengan suasana santai yang nyaman. Berlokasi di jantung kota Pagar Alam, Lesehan Bakso Palapa telah menjadi destinasi kuliner favorit sejak pertama kali dibuka.
            </p><p className='text-justify w-[500px]'>Lesehan Bakso Palapa didirikan pada tahun 2010 oleh Bapak Ahmad dan Ibu Siti, dengan visi untuk menyajikan bakso terbaik yang terbuat dari bahan-bahan segar dan berkualitas. Berawal dari usaha kecil di halaman rumah, kini kami telah berkembang menjadi rumah makan yang dikenal luas oleh masyarakat Pagar Alam.
            </p>
          </div>

        </div>
        <div className='grid grid-cols-12 mt-8 '>
          <div className='col-span-3 px-2 py-5 flex gap-2 items-center bg-white shadow-lg rounded-lg  '>
            <div className='w-[40%] p-5 flex justify-center bg-[#4F6C51]   rounded-full'>
              <FaBowlFood className='text-6xl text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#4F6C51]'>Cita Rasa</h1>
              <p> Lorem ipsum dolor sit amet consectetur.consectetur.</p>
            </div>
          </div>
          <div className='col-start-5 col-span-4 px-2 py-5 flex gap-2 items-center bg-white shadow-lg rounded-lg  '>
            <div className='w-[25%] p-5 flex justify-center bg-[#4F6C51]   rounded-full'>
              <FaHeartbeat className='text-6xl text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#4F6C51]'>Nyaman Dan Aman</h1>
              <p> Lorem ipsum dolor sit amet consectetur.consectetur.</p>
            </div>
          </div>
          <div className='col-start-10 col-span-3 px-2 py-5 flex gap-2 items-center bg-white shadow-lg rounded-lg  '>
            <div className='w-[40%] p-5 flex justify-center bg-[#4F6C51]   rounded-full'>
              <MdRoomService className='text-6xl text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#4F6C51]'>Service</h1>
              <p> Lorem ipsum dolor sit amet consectetur.consectetur.</p>
            </div>
          </div>
          <div className='col-span-12 my-10 h-[40vh] '>
            <Image src={tentang} className='object-cover h-full brightness-75 rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}
