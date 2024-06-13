import React from 'react'
import Sidebar from '@/components/backoffice/Sidebar'
import Navbar from '@/components/backoffice/Navbar'

export default function layout({children}) {
  return (
    <div className='flex'>
      {/* sidebar */}
      <Sidebar />

      {/* Main body */}
      <div className='w-full'>
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className='p-8 bg-slate-900 text-slate-50 min-h-screen mt-16 ml-60'>
            {children}
        </main>
      </div>
    </div>
  )
}
