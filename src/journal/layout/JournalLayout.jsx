import { Box } from '@mui/material'
import React from 'react'

const drawerWhidth = 240;

const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* Navbar drawerWhidth */}
        {/* Sidebar drawerWhidth */}

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            {/* Toolbar */}
            {children}
        </Box>
    </Box>
  )
}

export default JournalLayout