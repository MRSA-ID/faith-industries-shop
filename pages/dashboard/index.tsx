import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { HomePageContent } from './content'
// import DashboardLayout from '@/components/dashboard/DashboardLayout'
const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

const Page = () => {
  return <HomePageContent />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Page