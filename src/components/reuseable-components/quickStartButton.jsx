import React from 'react'
import { HiOutlineLightBulb } from 'react-icons/hi'

const QuickStartButton = () => {
    return (
        <button className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full">
            <div className="flex">
                <HiOutlineLightBulb size={20} className="mr-2" />  
                 Quickstart
            </div>
        </button>
    )
}

export default QuickStartButton