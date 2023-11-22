import React from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader'

const DashboardContent = ({children}) => {
  return (
    <div className='bg-[#F4F3F6] py-[53px] px-[30px] h-[100vh] w-full ml-[15%]'>
      <DashboardHeader />
        {children}
    </div>
  )
}

export default DashboardContent