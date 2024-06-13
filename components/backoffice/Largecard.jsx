import { Layers } from 'lucide-react'
import React from 'react'

export default function Largecard({ data }) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 py-8 ${data.color}`}>
      <Layers />
      <h4>{data.title}</h4>
      <h4 className=' lg:text-3xl text-2xl'>UGX.{data.sales}</h4>
    </div>
  )
}
