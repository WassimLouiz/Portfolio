import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './Footer.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageAI from './AI-image-even-darker.jpg';
const Footer = () => {
  
  return (
    <footer className="Footer">
      <div className="container-contact">
        <img className="ImageAI" src={ImageAI} alt="ImageAI"/>
        <div>
        <ul className="contact">
            <Typography variant='h5' className="ContactMe">
            My contacts
            </Typography>
        </ul>
            <ul>
              <Typography variant='body1' >
                <div className="color-link">
                <b className="logo-title"><AlternateEmailIcon/> Email:</b>  wassim.louiz@supcom.tn</div></Typography>
              
            </ul>
            <ul >
              <Typography variant='body1' >
              <div  className="color-link">
                <b className="logo-title"><LinkedInIcon/> LinkedIn:</b>  linkedin.com/in/wassim-louiz-ba87421b0</div></Typography>
              
            </ul>
            <ul>
              <Typography variant='body1' >
              <div  className="color-link">
                <b  className="logo-title"> <PhoneAndroidIcon/> Phone Number:</b>  +21623985185</div></Typography>
              
            </ul>
            </div>
          </div>
          <hr/>
      <div className="Final">
        <Container className="Container-footer">
          <Typography variant='body2' className="Name">
            2021-{new Date().getFullYear()} Louiz Wassim
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;