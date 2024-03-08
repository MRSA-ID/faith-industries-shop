"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { HomePageContent } from './homepage-content'
import Head from 'next/head'
import { UnderDevelopment } from '@/components/UnderDevelopment'
// import DashboardLayout from '@/components/dashboard/DashboardLayout'
const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

const Invoice = () => {
  return (
    <div className='w-full h-screen px-5 py-7 overflow-y-hidden'>
      <Head>
        <title>Invoice | FTH Product</title>
      </Head>
      <UnderDevelopment />
    </div>
  )
}

Invoice.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Invoice