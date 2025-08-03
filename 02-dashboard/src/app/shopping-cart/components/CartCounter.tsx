"use client"

import { useState } from "react"

interface Props {
    value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
    const [counter, setCounter] = useState(value)

    const handleIncreseCounter = () => {
        setCounter(counter + 1)
    }

    const handleDecreseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex gap-4">
                <button className="py-2 px-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-300"
                    onClick={handleIncreseCounter}
                >+1</button>
                <button className="py-2 px-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-300"
                    onClick={handleDecreseCounter}
                >-1</button>
            </div>
        </>
    )
}