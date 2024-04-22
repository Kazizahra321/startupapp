import React from 'react'
import './Support.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Support() {
  return (
    <div className='support'>
      <h1 className='newText'>FAQ's & Support</h1>
      <h2 className='how'>How can we Help You?</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='primaryText'>How long does it take to register a company with your services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Anticipate warp speed! Typically, we can have your company birthed and legally kicking in approximately 14 days. Fasten your seatbelt; we’re on the express lane to incorporation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='primaryText'>What makes your legal services stand out for startups?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We’re not your average legal eagles. We’re the Robin Hoods of law, providing tailor-made solutions, speedy service, and a touch of flair. Your startup deserves more than just paperwork; it deserves a legal adventure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='primaryText'>Can you help with trademark registration for my quirky brand?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Absolutely! Quirkiness is our jam. Whether your brand is funky or flamboyant, we’ve got the legal moves to make it uniquely yours. Let’s trademark that personality!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='primaryText'>Are your legal consultations as boring as they sound?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Not in a million legal briefs! Our consultations are more like legal stand-up comedy – informative, entertaining, and over before you know it. We promise, no snoozefest here, just legal wisdom with a side of wit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Learn More</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  )
}

export default Support
