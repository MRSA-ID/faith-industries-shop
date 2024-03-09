"use client";
import { Footer } from 'flowbite-react';
import react, { FC } from 'react';

export const DashboardFooter: FC = function () {
  return (
    <Footer className="p-4 flex flex-row justify-center items-center w-full">
      <Footer.Copyright href="#" by="ramadhan-developer™" year={2024} />
    </Footer>
  )
};