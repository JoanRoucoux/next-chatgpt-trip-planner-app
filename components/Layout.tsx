import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, Container, Paper } from '@mui/material';
import { LayoutType } from '../commons/types';

const theme = createTheme();

const Layout = ({ children }: LayoutType): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ my: { xs: 6 }, p: { xs: 3 } }}>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </Paper>
    </Container>
  </ThemeProvider>
);

export default Layout;
