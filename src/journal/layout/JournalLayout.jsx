import { Box } from '@mui/material'
import Navbar from '../components/Navbar';

const drawerWhidth = 240;

const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        
        <Navbar drawerWhidth={drawerWhidth}/>
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