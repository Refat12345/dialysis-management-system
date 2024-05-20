import React from 'react'
import { DataContext } from '../DataContext'
import { useContext,useState } from 'react';
import DialogNote from './DialogNote';
function NoteCenter() {
  const { data } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white h-32 p-4 border border-indigo-300 rounded-2xl mb-7 max-w-5xl" onClick={() => setOpen(true)}>
    <span className="block" >تفاصيل عامة :</span>
    {data.NoteContent}
    <DialogNote open={open} setOpen={setOpen}/>
  </div>
  
  )
}

export default NoteCenter
