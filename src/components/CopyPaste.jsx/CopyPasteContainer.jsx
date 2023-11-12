import React from 'react'
import CopyPaste from './CopyPaste'
import CopyPaste2 from './CopyPaste2'

const CopyPasteContainer = () => {
  return (
    <div style={{display:"flex",gap:20}}>
        <CopyPaste/>
        <CopyPaste2/>
    </div>
  )
}

export default CopyPasteContainer