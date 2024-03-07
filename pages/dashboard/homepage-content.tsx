'use client';
import type { NextPage } from "next"
import { Card } from 'flowbite-react';
import Image from "next/image";
import { ChartComponent } from "@/components/core/Chart";

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
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
      <Card className="col-span-2 ">
        <ChartComponent />
      </Card>
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Neil image"
                    height="32"
                    src="/images/profile-picture-1.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Bonnie image"
                    height="32"
                    src="/images/profile-picture-3.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Michael image"
                    height="32"
                    src="/images/profile-picture-2.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Lana image"
                    height="32"
                    src="/images/profile-picture-4.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
              </div>
            </li>
            <li className="pb-0 pt-3 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <Image
                    alt="Thomas image"
                    height="32"
                    src="/images/profile-picture-5.jpg"
                    width="32"
                    className="rounded-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
      </div>
    </div>
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