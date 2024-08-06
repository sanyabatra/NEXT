// src/app/page.js
'use client';

import React from 'react';
import Hero from './components/Hero';
import Heading from './components/Heading';
import ButtonMenu from './components/ButtonMenu';
import Button from './components/Button';

const Page = () => {
  return (
    <div className=' justify-center items-center h-screen justify-content center'>
      <Hero />
      <Heading />
      <div className="flex">
      
        <div className="w-1/4   ml-0">
         
          <p className="text-lg text-opacity-50  text-gray-800" > Translate videos in your own voice, globalize in a click!</p>
        </div>

      
        <div className="w-3/4 p-4 flex">
          <ButtonMenu className="space-x-4"/>
          <p>  &nbsp; &nbsp;</p>
          <Button className="ml-4"/>
        </div>
      </div>
    </div>
  );
};

export default Page;
