"use client";
import react from 'react';
import Image from 'next/image'

export const UnderDevelopment: FC = function () {
  return (
    <div class="rounded-lg flex flex-col justify-center items-center h-full">
      <div class="flex flex-col items-center justify-center gap-6">
        <Image
          src="/wrench.jpg"
          width={160}
          height={160}
          alt="Wrench"
          className="rounded-2xl"
        />
        <p class="text-bs-black-1 text-base text-center font-bold w-[280px] dark:text-white">
          Layanan ini masih dalam tahap pengembangan
        </p>
      </div>
    </div>
  )
};