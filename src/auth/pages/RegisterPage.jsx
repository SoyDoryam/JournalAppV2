import { Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'

const RegisterPage = () => {
  return (
    <>
      <Typography variant='h3'>RegisterPage</Typography>
      <Link component={ RouterLink } to='/auth/Login'>regresar</Link>
    </>
  )
}

export default RegisterPage