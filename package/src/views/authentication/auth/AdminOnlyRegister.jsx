import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Typography } from '@mui/material';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AdminOnlyRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        username,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb="5px">Username</Typography>
          <CustomTextField 
            id="register-username" 
            variant="outlined" 
            fullWidth 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb="5px">Password</Typography>
          <CustomTextField 
            id="register-password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box> 
          <Typography variant="subtitle1" fontWeight={600} mb="5px">Confirm Password</Typography>
          <CustomTextField 
            id="register-confirm-password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
      </Stack>
      <Box mt={3}>
        <Button color="primary" variant="contained" size="large" fullWidth onClick={handleRegister}>
          Register User
        </Button>
      </Box>
    </Box>
  );
};

export default AdminOnlyRegister;