import * as React from 'react';
import './Services.css'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';



const icons = [
  { id: 1, src: './clip1.png', alt: 'Image 1' },
  { id: 2, src: './clip2.png', alt: 'Image 2' },
  { id: 3, src: './clip3.png', alt: 'Image 3' },
  { id: 4, src: './clip4.png', alt: 'Image 4' },
  { id: 5, src: './clip5.png', alt: 'Image 5' },
  { id: 6, src: './clip6.png', alt: 'Image 6' },
];

export default function Services() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='services'>
        <span className='serv-pad'><h1 className='one'>Let's face it </h1>
        <h2 className='serv-text'> running a business is hard.</h2>
        <h2 className='serv-text'> Managing legal compliances makes it harder.</h2>
    <h2 className='secondary'>Let’s face it—running a business is hard. Managing customer data with spreadsheets makes it harder.</h2>
    </span>
            <Box className="one" sx={{ height: 500, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3, marginTop: 3 }}>
        {icons.map((icon) => (
          <Grow key={icon.id} in={checked}>
            <Paper sx={{ m: 1, width: 300, height: 250 }} elevation={4}>
              <img src={icon.src} alt={icon.alt} style={{ width: '100%', height: '100%' }} />
            </Paper>
          </Grow>
        ))}
      </Box>
    </Box>
    </div>
    
  );
}
