import React from 'react'
function NoteCenter({data}) {
  return (
    <div className="bg-white h-48  p-4 border border-indigo-300 rounded-2xl mb-7 max-w-5xl">
    <span className="block" >تفاصيل عامة :</span>
    {data.content}
  </div>
  )
}

export default NoteCenter
