import { Box, Toolbar } from '@mui/material'
import { Navbar, SideBar } from '../components';


const drawerWhidth = 280;

const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        
        <Navbar drawerWhidth={drawerWhidth}/>

        <SideBar drawerWhidth={drawerWhidth}/>

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}

export default JournalLayout