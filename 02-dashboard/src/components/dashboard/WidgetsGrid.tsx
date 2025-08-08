"use client"
import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"

const widgets = [
  {
    label: "Contador",
    link: "/dashboard/counter",
    title: "5",
    subTitle: "Productos en el carrito",
    icon: <IoCartOutline size={40} className="to-blue-500" />
  }
]

export const WidgetsGrid = () => {
  return (
    <div className='flex flex-wrap gap-4 mt-2'>
        <SimpleWidget {...widgets[0]} />
      </div>
  )
}