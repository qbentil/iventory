import { CiSearch, CiViewTable } from 'react-icons/ci'

import React from 'react'
import RootLayout from '@/App/layout'
import { VscGraph } from 'react-icons/vsc'

const TabView = ({ view, setView }: { view: 'graphical' | 'tabular', setView: React.Dispatch<React.SetStateAction<'graphical' | 'tabular'>> }) => (
    <div className='flex items-end justify-start gap-x-3 bg-white py-2 pb-0 px-3'>

        <div className={`flex items-center justify-center gap-x-2 border-b-2 py-2 px-3 ${view === "graphical" ? 'border-green-600' : 'border-tansparent'}`} onClick={() => setView('graphical')}>
            <VscGraph className={`${view === "graphical" ? 'text-green-600' : 'text-gray-400'}  font-semibold cursor-pointer`} />
            <p className={`${view === "graphical" ? 'text-green-600' : 'text-gray-400'}  font-semibold cursor-pointer`}>Graphical View</p>
        </div>
        <div className={`flex items-center justify-center gap-x-2 border-b-2 py-2 px-3 ${view === "tabular" ? 'border-green-600' : 'border-tansparent'}`} onClick={() => setView('tabular')}>
            <CiViewTable className={`${view === "tabular" ? 'text-green-600' : 'text-gray-400'}  font-semibold cursor-pointer`} />
            <p className={`${view === "tabular" ? 'text-green-600' : 'text-gray-400'}  font-semibold cursor-pointer`}>Tabular View</p>
        </div>
    </div>
)

const Reports = () => {
    const [view, setView] = React.useState('graphical' as 'graphical' | 'tabular')
    return (
        <RootLayout>
            <div className='w-full h-screen flex flex-col items-start justify-start bg-gray-50'>
                {/* header to toggle between graphical and tabular view */}
                <div className='w-full flex items-end justify-between gap-x-3 bg-white py-2 pb-0 px-3'>
                    <TabView view={view} setView={setView} />
                    {/* search bar */}
                    <div className="flex items-center justify-center bg-gray-100 px-3 py-2 rounded-full">
                        <span className="flex items-center justify-center gap-x-3">
                            <CiSearch className="text-green-700 font-bold" />
                            <input type="text" placeholder="Search..." className="text-green-700 bg-transparent outline-none" />
                        </span>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default Reports