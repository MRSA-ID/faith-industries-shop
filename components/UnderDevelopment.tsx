"use client";
import react, { FC } from 'react';
import Image from 'next/image'
import Wrench from '@/public/wrench.jpg'

export const UnderDevelopment: FC = function () {
  return (
    <div className="rounded-lg flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={Wrench}
          alt="Wrench"
          className="rounded-2xl"
          priority
        />
        <p className="text-bs-black-1 text-base text-center font-bold w-[280px] dark:text-white">
          Layanan ini masih dalam tahap pengembangan
        </p>
      </div>
    </div>
  )
};