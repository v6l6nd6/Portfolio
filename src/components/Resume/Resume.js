import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";


function Resume() {


  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">WEB DEV experience</h3>
            <Resumecontent
              title="Web Developer at Yandex company"
              date="December 2021 - February 2022"
              content={[
                "Moscow, Russia",
                "Interface developer for the “Yandex Food” media platform", 
                "Implement client functionality of media platform services",
                "Integration of the media platform “Yandex Food” transaction services",
                "JS/Node JS/React/HTML/Sass/CSS/BAM/",
                "Git/Gulp/Webpaсk"
              ]}
            />
            <Resumecontent
              title="Web Developer at Finn Flare company"
              date="January 2021 - December 2021"
              content={[
                "Moscow, Russia",
                "Creation of site architecture",
                "Participation in the development of a new platform in “IMSHOP.IO”",
                "Responsiveness / cross-browser compatibility / optimization",
                "Participated in the app launch with IMSHOP.IO",
                "HTML/Sass/CSS/BAM/JavaScript",
                "Git/Gulp/Webpaсk"
              ]}
            />
            <h3 className="resume-title">Other experience</h3>
            <Resumecontent
              title="BKS"
              date="March 2019 — January 2021"
              content={[
                "Bryansk, Russia",
                 "Help in setting up sites on the React platform"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>

            <Resumecontent
              title="Friedrich Schiller University Jena"
              date="Jul 2019"
              content={[
                "Angewandte Informatik"
              ]}

            />
            <Resumecontent
              title="Petersburg State Railway University"
              date="Sep 2013 - Jun 2017"
              content={[
                "Railway Software Developer"
              ]}

            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              content={[
                "HTML5",
                "CSS3",
                "Sass",
                "JavaScript",
                "Node JS",
                "React JS",
                "Next JS",
                "Nest JS",
                "MongoDB",
                "Redux",
                "React-Redux",
                "redux toolkit",
                "Websocket",
                "Context API",
                "Typescript",
                "Git",
                "Webpack",
                "Gulp"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
