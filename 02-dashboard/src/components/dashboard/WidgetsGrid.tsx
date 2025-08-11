"use client"

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store"

export const WidgetsGrid = () => {
  const inCart = useAppSelector(state => state.counter.count)

  return (
    <div className='flex flex-wrap gap-4 mt-2'>
      <SimpleWidget
        title={inCart.toString()}
        subTitle="Productos en el carrito"
        icon={<IoCartOutline size={40} className="text-blue-600" />}
        link="/dashboard/counter"
        label="Contador"
      />
    </div>
  )
}