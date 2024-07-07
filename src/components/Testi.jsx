import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from 'react'

export default function Testi() {
    return (
        <div className='relative border'>
            <div className='grid grid-cols-12 gap-5 md:gap-0 py-20 md:py-36 lg:mx-16 mx-6 md:mx-6 sm:mx-10'>
                <div className='col-span-12  text-center gap-2'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Ulasan Pelanggan</h1>
                    <p className='mt-4 mb-10'>Bagaimana pendapatan mereka?</p>
                </div>
                <div className='col-span-12 flex gap-5 flex-col md:flex-row'>
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <Image
                                alt="Card background"
                                className="object-center  h-[10rem] w-[10rem]  rounded-full"
                                src="https://nextui.org/images/hero-card-complete.jpeg"

                            />
                        </CardHeader>
                        <CardBody className="overflow-visible flex items-center py-2">
                            <h4 className="font-bold text-large">Faiz Aflah</h4>
                            <small className="text-default-500 mt-1 mb-5">11-09-2024</small>
                            <p className="text-sm text-gray-600 text-center font-medium">Pelayanan yang luar biasa! Produk tiba tepat waktu dan kualitasnya sangat memuaskan. Saya pasti akan kembali berbelanja di sini.</p>
                        </CardBody>
                    </Card>
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <Image
                                alt="Card background"
                                className="object-center  h-[10rem] w-[10rem]  rounded-full"
                                src="https://nextui.org/images/hero-card-complete.jpeg"

                            />
                        </CardHeader>
                        <CardBody className="overflow-visible flex items-center py-2">
                            <h4 className="font-bold text-large">Faiz Aflah</h4>
                            <small className="text-default-500 mt-1 mb-5">11-09-2024</small>
                            <p className="text-sm text-gray-600 text-center font-medium">Pelayanan yang luar biasa! Produk tiba tepat waktu dan kualitasnya sangat memuaskan. Saya pasti akan kembali berbelanja di sini.</p>
                        </CardBody>
                    </Card>

                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <Image
                                alt="Card background"
                                className="object-center  h-[10rem] w-[10rem]  rounded-full"
                                src="https://nextui.org/images/hero-card-complete.jpeg"

                            />
                        </CardHeader>
                        <CardBody className="overflow-visible flex items-center py-2">
                            <h4 className="font-bold text-large">Faiz Aflah</h4>
                            <small className="text-default-500 mt-1 mb-5">11-09-2024</small>
                            <p className="text-sm text-gray-600 text-center font-medium">Pelayanan yang luar biasa! Produk tiba tepat waktu dan kualitasnya sangat memuaskan. Saya pasti akan kembali berbelanja di sini.</p>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    )
}
