import { Authenticate, Footer, Loader } from '@/components';

import Card from '@/components/cards';
import Head from 'next/head';
import { ImSpinner } from 'react-icons/im'
import { Navbar } from '@/components';
import { IoArrowForward } from 'react-icons/io5'
const cardData = [
  { title: 'Stock', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/sms', linkText: 'View' },
  { title: 'Items', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/contacts', linkText: 'View' },
  { title: 'Total Groups', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/groups', linkText: 'View' },
  { title: 'Total Templates', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/templates', linkText: 'View' },
  { title: 'Total Campaigns', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/campaigns', linkText: 'View' },
  { title: 'Total Users', Icon: IoArrowForward, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', link: '/users', linkText: 'View' },
]

const Home = () => {
  return (
    <Authenticate >
      {/*  */}
      <div className='w-screen h-screen flex flex-col bg-green-50'>
        {/* navbar */}
        <Navbar />

        {/* tabs */}
        <div className="w-full flex items-center justify-center">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
            {
              cardData.map((card) => (
                <Card {...card} key={card.title} />
              ))
            }
          </div>
        </div>


        {/* footer */}
        <Footer />
      </div>
    </Authenticate>
  )
}

export default Home