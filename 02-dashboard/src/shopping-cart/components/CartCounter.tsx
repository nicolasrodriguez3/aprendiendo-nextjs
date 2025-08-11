"use client"

import { useAppDispatch, useAppSelector } from "@/store"
import { decrement, increment, ready } from "@/store/counter/counterSlice"
import { useEffect } from "react"

interface Props {
    value?: number
}

interface CounterResponse {
    count: number
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const response = await fetch('/api/counter')
    const data = await response.json()
    return data
}

export const CartCounter = ({ value = 0 }: Props) => {
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //   dispatch( ready(value) )
    // }, [dispatch, value])

    useEffect(() => {
        getApiCounter().then(data => {
            dispatch(ready(data.count))
        })
    }, [dispatch])


    return (
        <>
            <span className="text-9xl">{count}</span>

            <div className="flex gap-4">
                <button className="py-2 px-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-300"
                    onClick={() => dispatch(decrement())}
                >-1</button>
                <button className="py-2 px-4 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-colors duration-300"
                    onClick={() => dispatch(increment())}
                >+1</button>
            </div>
        </>
    )
}