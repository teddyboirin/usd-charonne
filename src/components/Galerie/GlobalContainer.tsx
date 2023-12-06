'use client';
import React, { useState } from 'react';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function GlobalContainer() {


  return (
    <>
      <section className="w-full bg-black p-6">
        <div className="w-full flex items-center justify-center">
          <div className="mb-4 flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter value="SM1" />
            <ButtonFilter value="SF1" />
            <ButtonFilter value="S1" />
          </div>
        </div>
        <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 relative">
          <Item
            imageLink="https://placehold.co/800x800/jpg"
          />
          <Item
            imageLink="https://placehold.co/400x400/jpg"
          />
        </div>
      </section>
    </>
  );
}
