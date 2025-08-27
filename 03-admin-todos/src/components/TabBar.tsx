"use client"

import { useState } from "react"
import { setCookie } from 'cookies-next';


interface Props {
    currentTab?: number
    tabOptions?: number[]
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {
    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = (tab: number) => {
        setCookie('selectedTab', tab.toString())
        setSelected(tab)
    }

    return (
        <div className="grid w-full space-x-2 rounded-xl bg-gray-200 p-2"
            style={{ gridTemplateColumns: `repeat(${tabOptions.length}, minmax(0, 1fr))` }}>
            {tabOptions.map((tab) => (
                <div key={tab}>
                    <input
                        checked={selected === tab}
                        onChange={() => onTabSelected(tab)}
                        type="radio"
                        id={tab.toString()}
                        className="peer hidden"
                    />
                    <label htmlFor={tab.toString()} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all duration-300">
                        {tab}
                    </label>
                </div>
            ))}
        </div>
    )
}