import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({drawerWhidth = 240}) => {
  return (
    <Box 
        component='nav'
        sx={{ width: {sm: drawerWhidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
            variant='permanent' //temporary
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWhidth },
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Dorian Rizo
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Sunt elit sit commodo voluptate pariatur proident excepteur.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}

export default SideBar