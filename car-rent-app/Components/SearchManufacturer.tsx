'use client'
import React, { useState } from 'react'
import {SearchManufacturerProps} from "@/types/index"

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  const [query,setQuery]=useState("");
  return (
    <div>
      <input placeholder='Volkswagon' value={manufacturer} onChange={(e)=>setQuery(e.target.value)} />
    </div>
  )
}

export default SearchManufacturer;