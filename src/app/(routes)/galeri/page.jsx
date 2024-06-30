import React from 'react'
import ikan from '../../../../public/assets/ikan.png'
import Image from 'next/image'


export default function page() {

    const images = [
        {
            class_name: 'slower-1',
            img: ikan
        },
        {
            class_name: 'slower-2',
            img: ikan
        },
        {
            class_name: 'slower-3',
            img: ikan
        },
        {
            class_name: 'slower-4',
            img: ikan
        },
        {
            class_name: 'slower-5',
            img: ikan
        },
        {
            class_name: 'slower-6',
            img: ikan
        },
        {
            class_name: 'slower-7',
            img: ikan
        },
    ]
    return (

        <div className=' h-[100vh] overflow-hidden '>
            {/* <div className='absolute flex justify-center items-center  w-full  h-[100vh] z-50 -translate-x-full animate-indeterminate-bar'>
                <p>Our Galeri</p>
            </div> */}
            <div className='horizontal-scroll-wrapper'>
                {images.map(image => (
                    <div className={`img-wrapper  ${image.class_name}`}>
                        <a href="" target='_blank'>
                            <Image className='img ' src={image.img} alt='' />
                        </a>
                    </div>
                ))}
            </div>
        </div>

    )
}
