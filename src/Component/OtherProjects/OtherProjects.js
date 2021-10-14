import { Card } from 'react-bootstrap';
import * as React from 'react';
import "./OtherProjects.css";
function OtherProjects() {
    return (
        <div className="CardDiv">
        <Card className="CardBox" >
        <Card.Body>
          <Card.Title className="Title">Facemesh landmark</Card.Title>
          <Card.Subtitle className="Sub">Using reactjs and tensorflowjs</Card.Subtitle>
          <Card.Text>
            A web application using a real time camera feed to detect the person's face and make the facemesh.
          </Card.Text>
          <Card.Link href="https://github.com/WassimLouiz/Facemesh-Landmark.git">Link</Card.Link>
          
        </Card.Body>
      </Card>
      <Card className="CardBox" >
        <Card.Body>
          <Card.Title className="Title">Object detection</Card.Title>
          <Card.Subtitle className="Sub">Using reactjs and tensorflowjs</Card.Subtitle>
          <Card.Text>
            A simple web application that uses the real time camera feed to detect all sorts of objects using tensorflowjs.
          </Card.Text>
          <Card.Link href="https://github.com/WassimLouiz/Object_detection.git">Link</Card.Link>
          
        </Card.Body>
      </Card>
      <Card className="CardBox" >
        <Card.Body>
          <Card.Title className="Title">Text Generator</Card.Title>
          <Card.Subtitle className="Sub">Using GPT Neo</Card.Subtitle>
          <Card.Text>
            A simple text generator using Generative Pre-trained Transformer Neo.
          </Card.Text>
          <Card.Link href="https://github.com/WassimLouiz/TextGenerator.git">Link</Card.Link>
        </Card.Body>
        </Card>
        <Card className="CardBox" >
        <Card.Body>
          <Card.Title className="Title">Used Car price prediction</Card.Title>
          <Card.Subtitle className="Sub">Using ReactJs</Card.Subtitle>
          <Card.Text>
            A website helping the sellers to estimate the used car price and share it for the buyers to see.
          </Card.Text>
          <Card.Link href="https://github.com/WassimLouiz/TextGenerator.git">Link</Card.Link>
          
        </Card.Body>

      </Card>
      </div>
);

}export default OtherProjects;