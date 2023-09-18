import { BarChart, DoughnutChart, LineChart } from '@/components'

import { BsArrowUp } from 'react-icons/bs'
import React from 'react'
import { faker } from '@faker-js/faker'

const TabsData = [
    {
        count: 10,
        title: 'Total assets',
        range: 'Today'
    },
    {
        count: 3,
        title: 'Emolument - Items',
        range: 'Today'
    },
    {
        count: 7,
        title: 'Emolument - Administration',
        range: 'September 2021'
    },
    {
        count: 5,
        title: 'Special Approvals',
        range: 'Last 7 days'
    },
    {
        count: 2,
        title: 'Special Approvals',
        range: 'Last Month'
    },
    {
        count: 1,
        title: 'Employee Benefits',
        range: 'Last Month'
    },
    {
        count: 3,
        title: 'Audit - Items',
        range: 'Last Month'
    },
    {
        count: 2,
        title: 'Audit - Administration',
        range: 'Last Month'
    },
    {
        count: 12,
        title: 'Items - Pending approval',
        range: 'Last Month'
    }
]
const label1 = ["Revenue", "Cost"]
const label2 = ["Revenue", "Cost", "Expenses"]
const label3 = ["Actuals", "Budget"]
const RevCost = {
    labels: label1,
    datasets: [
        {
            label: '# of Items',
            data: label1.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: [
                '#4CAF50',
                '#76FF03',
            ],
            borderColor: [
                '#43A047',
                '#64DD17',
            ],
            borderWidth: 1,
        },
    ],
};

const ActualBudget = {
    labels: label3,
    datasets: [
        {
            label: '# of Items',
            data: label3.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: [
                '#4CAF50',
                '#76FF03',
            ],
            borderColor: [
                '#43A047',
                '#64DD17',
            ],
            borderWidth: 1,
        },
    ],
}
const RevCostExp = {
    labels: label2,
    datasets: [
        {
            label: '# of Items',
            data: label2.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: [
                '#76FF03',
                '#4CAF50',
                '#FFB700',
            ],
            borderColor: [
                '#64DD17',
                '#43A047',
                '#FFB74D',
            ],
            borderWidth: 1,
        },
    ],
}

const Tab = ({ count, title, range }: { count: number, title: string, range: string }) => {
    return (
        <div className='w-full h-32 flex flex-col items-start justify-start bg-green-800 px-4 py-2'>
            <p className='text-5xl font-bold text-gray-50'>{count}</p>
            <div className='flex my-2 flex-col items-start w-full'>
                <p className='text-sm text-gray-50'>{range}</p>
                <p className='text-gray-50'>{title}</p>
            </div>
        </div>
    )
}

const Graphical = () => {
    return (
        <div className='w-full flex items-start justify-start mb-4'>
            {/* content left */}
            <div className='w-1/5 h-full flex flex-col gap-y-3 items-center justify-center py-2 px-4'>
                <div className='w-full flex flex-col gap-y-2 items-center justify-center  py-2 px-3'>
                    {
                        TabsData.map((item) => (
                            <Tab key={item.title} count={item.count} title={item.title} range={item.range} />
                        ))
                    }
                </div>
            </div>
            {/* Content Right */}
            <div className='w-4/5 h-full flex  flex-col items-start justify-start py-2 px-4'>
                {/* content top */}
                <div className='w-full flex items-start justify-start gap-x-4 py-2 px-3'>
                    <div className='w-1/2 h-full flex flex-col gap-y-5 items-start justify-start bg-green-900 px-8 py-10 shadow-lg'>
                        <p className='text-2xl font-semibold text-gray-300'>Total Revenue</p>
                        <p className='text-5xl font-bold text-gray-50'>GHS 150,000</p>
                        <div className='flex my-2 gap-x-2 items-center justify-start w-full'>
                            <p className='font-bold flex items-center justify-center text-green-500'><BsArrowUp /> <span>12 %</span></p>
                            <p className='text-gray-300'>increase from Target</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-full grid grid-cols-2 items-start justify-start gap-4'>
                        <div className='h-full flex flex-col gap-y-2 items-start justify-start bg-white px-8 py-5 shadow-lg'>
                            <p className='text-xl font-semibold text-green-800'>Total Costs</p>
                            <p className='text-2xl font-bold text-green-600'>GHS 150,000</p>
                        </div>
                        <div className='w-h-full flex flex-col gap-y-2 items-start justify-start bg-white px-8 py-5 shadow-lg'>
                            <p className='text-xl font-semibold text-green-800'>Debits</p>
                            <p className='text-2xl font-bold text-green-600'>GHS 150,000</p>
                        </div>
                        <div className='h-full flex flex-col gap-y-2 items-start justify-start bg-white px-8 py-5 shadow-lg'>
                            <p className='text-xl font-semibold text-green-800'>Credit</p>
                            <p className='text-2xl font-bold text-green-600'>GHS 150,000</p>
                        </div>
                        <div className='w-h-full flex flex-col gap-y-2 items-start justify-start bg-white px-8 py-5 shadow-lg'>
                            <p className='text-xl font-semibold text-green-800'>Balance up to Cycle</p>
                            <p className='text-2xl font-bold text-green-600'>GHS 150,000</p>
                        </div>
                    </div>
                </div>
                {/* content botton */}
                <div className='w-full grid grid-cols-3 items-start justify-start gap-x-4 py-2 px-3'>
                    <div className='h-full flex flex-col gap-y-5 items-start justify-start bg-white px-8 py-10 shadow-lg'>
                        <DoughnutChart data={RevCost} />
                    </div>
                    <div className='h-full flex flex-col gap-y-5 items-start justify-start bg-white px-8 py-10 shadow-lg'>
                        <DoughnutChart data={ActualBudget} />
                    </div>
                    <div className='h-full flex flex-col gap-y-5 items-start justify-start bg-white px-8 py-10 shadow-lg'>
                        <DoughnutChart data={RevCostExp} />
                    </div>
                    {/* <DoughnutChart /> */}
                </div>
                <div className='w-full flex items-center justify-center gap-x-4 py-2 px-3 '>
                    <BarChart />
                </div>
                <div className='w-full flex items-center justify-center gap-x-4 py-2 px-3 mb-4'>
                    <LineChart />
                </div>
            </div>
        </div>
    )
}

export default Graphical