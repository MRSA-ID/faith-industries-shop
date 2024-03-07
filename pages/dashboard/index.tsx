import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { HomePageContent } from './homepage-content'
// import DashboardLayout from '@/components/dashboard/DashboardLayout'
const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

const Page = () => {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
      <HomePageContent />
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Page