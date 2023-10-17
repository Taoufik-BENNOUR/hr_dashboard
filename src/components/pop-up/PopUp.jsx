import { Box, Popper, Table } from '@mui/material'
import React, { useState } from 'react'
import "./popUp.css"
import { Close, Done } from '@mui/icons-material'
import TableLayout from '../table/Table'
const PopUp = ({open,anchorEl,placement,setOpen,title}) => {

  const handleClose = () =>{
    setOpen(false)
  }
  const users =["",""]
  return (
    <>
    <Popper className='pop-up' open={open} anchorEl={anchorEl} placement={placement}>
    <div className='pop-up-buttons'>
      <button ><Done/></button>
      <button onClick={()=>handleClose()}><Close/></button>
    </div>
      <Box className="pop-up-content" sx={{ p: 1, bgcolor: 'background.paper',
     }}>
        <TableLayout title={title}/>
      </Box>
    </Popper>
  </>
  )
}

export default PopUp