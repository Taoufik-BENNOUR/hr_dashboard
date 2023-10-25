import { Close, Done } from '@mui/icons-material'
import { Box, Popper } from '@mui/material'
import React from 'react'

const PopUpKeyword = ({open,anchorEl,placement}) => {
    const element = document.querySelector("#sidebar")

  return (
    <div>
            <Popper className='pop-up'
    modifiers= {[
      {
        name: 'preventOverflow',
        options: {
          boundary: element,
        },
      },
    ]}

  open={open} anchorEl={anchorEl} placement={placement}>

      <div className='pop-up-buttons'>
        <button ><Done/></button>
        <button ><Close/></button>
      </div>
        <Box className="pop-up-content" sx={{ p: 1, bgcolor: 'background.paper',
      }}>
cont       
 </Box>
    </Popper>
    </div>
  )
}

export default PopUpKeyword