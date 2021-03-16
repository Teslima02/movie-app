import * as React from 'react';
import Hero from '../../public/hero.svg';

export function LeftCard(): JSX.Element {
  return (
    <div className='max-w-xs mx-auto bg-white shadow-md overflow-hidden'>
      <div className='my-12 mx-4'>
          <p className="my-8 text-5xl font-semibold text-gray-900 uppercase">
            Rolobank
          </p>
          <p className="text-5xl text-blue-800 font-bold uppercase">
            We are a bank of the young and for the young
          </p>
      </div>
    </div>
  );
};