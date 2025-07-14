'use client'
import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
const Searchbar = () => {
    const [manufacturer,setManufacturer]=useState("");

    const handleSearch=()=>{
        console.log("Seach")
    }
  return (
    <form onSubmit={handleSearch}>
        <div className='searchBarItems'>
               <SearchManufacturer manufacturer={manufacturer} setManufacture={setManufacturer} />
        </div>
       

    </form>
  )
}

export default Searchbar