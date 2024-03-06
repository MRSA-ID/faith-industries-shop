'use client';
import type { NextPage } from "next"
import { Card } from 'flowbite-react';
import { UnderDevelopment } from '@/components/UnderDevelopment'

const HomePageContent:NextPage = function () {
  return (
    <>
    {/* <section>
      <header>
        <h1 className="mb-6 text-5xl font-extrabold dark:text-white">
          Welcome to Dashboard
        </h1>
      </header>
    </section> */}
    <UnderDevelopment />
    {/* <div className="h-full w-full">
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </div> */}
    </>
  )
}

export {HomePageContent}