import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Projects-TimeLine.css';

export default function OutlinedTimeline() {
  return (
    <Timeline position="alternate" className="timeline">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent ><div className="Container"><b className="title">Tutored</b><div>Building a mobile application for the impound management, facilitating the process for the field workers as well as for people whose car have been seized.
Built using the advantages given by the computer vision to detect the car plate as well as the mobility and flexibility of a mobile application.</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><div className="Container"><b className="title">Cloudification Project</b><div>A movies website using APIS to  load the data as well as firebase using as a database for the users and with Alan AI to bring the application to life and make the user  experience even better.</div></div> </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        
        <TimelineContent><div className="Container"><b className="title">P2M Projects</b><div>Building an Autonomous vehicle with Deep Reinforcement Learning, which uses several Advanced Driver-Assistance Systems (ADAS) to assist with  driving and parking functions, using DQN algorithm and CARLA simulator to observe the car in its environment.</div></div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent><div className="Container"><b className="title">Web and Mobile Development Projects</b><div><div>- A dynamic website, E-CAR, developed using React js and Firebase, that gives the renting agencies as well as car owners the opportunity to put their cars for rent. </div>
<div>- A dynamic website, developed using HTML5,CSS3,JSON,Javascript where you can find the lyrics and their explanation of the recent top hit songs.</div>
<div>- A mobile application, MedJournal , developed using Android studio and Firebase, that helps you keep track of your medical history by creating a medical journal containing the medicament and medical tests you took as well as your chronic illness and the surgeries you had.</div></div></div></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}