'use client'

import { useState } from "react"

export default function AlphabetDisplayComponent() {

    const [letter, setLetter] = useState('')
  return (
    <section className="flex gap-2.5">

        <h1>
            {letter}
        </h1>

        <button className="border p-2 rounded" onClick={()=>setLetter('A')}>A</button>
        <button className="border p-2 rounded" onClick={()=>setLetter(letter + 'B')}>B</button>
        <button className="border p-2 rounded" onClick={()=>setLetter(letter + 'C')}>C</button>
        <button className="border p-2 rounded" onClick={()=>setLetter(letter + 'D')}>D</button>
        <button className="border p-2 rounded" onClick={()=>setLetter(letter + 'E')}>E</button>
        <button className="border p-2 rounded" onClick={()=>setLetter(letter + 'F')}>F</button>
        <button className="border p-2 rounded" onClick={()=>setLetter('')}>Reset</button>
    </section>

    
  )
}   
