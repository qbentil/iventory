import { AiFillTags, AiOutlineStock } from 'react-icons/ai';
import { HiOutlineOfficeBuilding, HiOutlineUsers } from 'react-icons/hi';
import { NavItems, NavItemsAlt } from '@/utils';

import { BiSolidReport } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5'
import Link from 'next/link';
import RootLayout from '@/App/layout';

const Home = () => {
  return (
    <RootLayout>
      <div className="w-full h-screen flex flex-col items-center justify-start pt-10 bg-transparent">
        <div className="w-full flex flex-col items-center justify-center my-6">
          <p className="text-2xl text-gray-700">Welcome to <span className='font-bold'>SMS.IO</span>, click on a module below to get started</p>
        </div>

        <div className="w-[80%] h-[30vh] flex gap-x-10 gap-y-7 flex-wrap items-center justify-center py-5">
          {
            NavItemsAlt.map((item) => (
              <Link href={item.link} key={item.link}>
                <div className={`p-5 rounded-md hover:underline text-white decoration-teal-600 cursor-pointer gap-y-2 flex flex-col items-center justify-center`}>
                  <div className={`w-[80px] h-[80px] flex items-center justify-center rounded-full bg-teal-50`}>
                    {item.icon({ className: `text-teal-600 h-10 w-10` })}
                  </div>
                  <p className="text-sm">{item.title}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </RootLayout>
  )
}

export default Home
