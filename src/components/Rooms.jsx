import React, { useContext } from 'react';

import { RoomContext } from '../context/RoomContext';

import Room from './Room'

import FadeLoader from 'react-spinners/FadeLoader'

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext)
  return (
    <section className='py-24'>
      {loading && (
        <div className='h-screen top-0 bottom-0 fixed bg-black/90 w-full z-50 flex justify-center items-center'>
          <FadeLoader color='white' />
        </div>
      )}
      <div className='container mx-auto lg:px-0'>
        <div className='text-center'>
          <div className='font-tertiary uppercase text-[15px] tracking-[6px]'>Hotel & Spa Adina</div>
          <h2 className='font-primary text-[45px] mb-4'>Room & Suites</h2>
        </div>
        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {rooms.map((room) => {
            return (
              <Room key={room.id} room={room} />
            )
          })}
        </div>
        
      </div>
    </section>
  )
};

export default Rooms;
