import { Box, Popper, Table } from '@mui/material'
import React, { useState } from 'react'
import "./popUp.css"
import { Close, Done } from '@mui/icons-material'
import TableLayout from '../table/Table'

const PopUp = ({open,anchorEl,placement,setOpen,title}) => {

  const handleClose = () =>{
    setOpen(false)
  }
<<<<<<< HEAD
  const element = document.querySelector('#sidebar');

  return (
    <>
    <Popper className='pop-up' 
=======
  const element = document.querySelector("#sidebar")
  return (
    <Box sx={{ width: 200, position: 'relative' }}>
    <Popper className='pop-up'
>>>>>>> b59e298c819d7b3b7cea680ca98391466a54e814
    modifiers= {[
      {
        name: 'preventOverflow',
        options: {
          boundary: element,
        },
<<<<<<< HEAD
      }
    ]}
    open={open} anchorEl={anchorEl} placement={placement}>
=======
      },
    ]}

  open={open} anchorEl={anchorEl} placement={placement}>
>>>>>>> b59e298c819d7b3b7cea680ca98391466a54e814
    <div className='pop-up-buttons'>
      <button ><Done/></button>
      <button onClick={()=>handleClose()}><Close/></button>
    </div>
      <Box className="pop-up-content" sx={{ p: 1, bgcolor: 'background.paper',
     }}>
        <TableLayout title={title}/>
      </Box>
    </Popper>
  </Box>
  )
}

export default PopUp