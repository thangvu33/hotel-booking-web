import React, { useContext } from 'react';

import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import AdultsDropdown from './AdultsDropdown';
import KidsDropdown from './KidsDropdown';

import { RoomContext } from '../context/RoomContext';

const BookForm = () => {

  const {handleClick} = useContext(RoomContext)
  return (
    <form className='h-[300px] w-full lg:h-[70px]'> 
      <div className='flex flex-col w-full h-full lg:flex-row divide-y lg:divide-y-0 lg:divide-x'>
        <div className='flex-1'> 
          <CheckIn />
        </div>
        <div className='flex-1'> 
          <CheckOut />
        </div>
        <div className='flex-1'> 
          <AdultsDropdown />
        </div>
        <div className='flex-1'> 
          <KidsDropdown />
        </div>
        <button onClick={(e) => handleClick(e)} className='btn btn-primary'>Check now</button>
      </div>
    </form>
  )
};

export default BookForm;
