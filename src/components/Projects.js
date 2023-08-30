import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/turkey.jpeg";
import projImg2 from "../assets/img/mexico.jpeg";
import projImg3 from "../assets/img/cro1.jpeg";
import projImg4 from "../assets/img/cali.jpeg";
import projImg5 from "../assets/img/lom.jpeg";
import projImg6 from "../assets/img/sula.jpeg";
import projimg1 from "../assets/img/sul.jpeg";
import projimg2 from "../assets/img/palu.jpeg";
import projimg3 from "../assets/img/tonga.jpeg";
import projimg4 from "../assets/img/jap.jpeg";
import projimg5 from "../assets/img/ind (4).jpg";
import projimg6 from "../assets/img/sol.jpg";
import projImG1 from "../assets/img/am.jpg";
import projImG2 from "../assets/img/har.jpg";
import projImG3 from "../assets/img/yas.jpg";
import projImG4 from "../assets/img/f.jpg";
import projImG5 from "../assets/img/el.jpg";
import projImG6 from "../assets/img/jo.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title:"Turkey-Syria Earthquake (2023)", 
      description: "Magnitude 4.3",
      imgUrl: projImg1, 
    },
    {
      title: "Chiapas earthquake in Mexico (2017)",
      description: "Magnitude 8.1",
      imgUrl: projImg2,
    },
    {
      title: "Petrinja earthquake in Croatia (2020)",
      description: "Magnitude 6.4",
      imgUrl: projImg3,
    },
    {
      title: "Ridgecrest earthquakes in California, United States (2019)",
      description: "Magnitude 6.4 and 7.1",
      imgUrl: projImg4,
    },
    {
      title: "Lombok earthquake in Indonesia (2018)",
      description: "Magnitude 6.9",
      imgUrl: projImg5,
    },
    {
      title: "Sulawesi earthquake and tsunami in Indonesia (2018)",
      description: "Magnitude 7.5",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Sulawesi Tsunami, Indonesia (2018)",
      description: "7.5 Magnitude",
      imgUrl: projimg1,
    },
    {
      title: "Palu Tsunami, Indonesia (2018)",
      description: "7.5 Magnitude",
      imgUrl: projimg2,
    },
    {
      title: "Tonga Tsunami (2006)",
      description: "7.9 Magnitude",
      imgUrl: projimg3,
    },
    {
      title: "Tohoku Tsunami, Japan (2011)",
      description: "9.0 Magnitude",
      imgUrl: projimg4,
    },
    {
      title: "Indian Ocean Tsunami (2004)",
      description: "9.1 Magnitude",
      imgUrl: projimg5,
    },
    {
      title: "Solomon Islands Tsunami (2007)",
      description: "8.1 Magnitude",
      imgUrl: projimg6,
    },
  ];

  const projects3 = [
    {
      title: "Cyclone Amphan",
      description: "India and Bangladesh in May 2020",
      imgUrl: projImG1,
    },
    {
      title: "Cyclone Harold",
      description: "Vanuatu, Fiji, Tonga, and the Solomon Islands in April 2020",
      imgUrl: projImG2,
    },
    {
      title: "Cyclone Yasa",
      description: "Fiji in December 2020",
      imgUrl: projImG3,
    },
    {
      title: "Cyclone Faraji",
      description: "Tanzania in March 2021",
      imgUrl: projImG4,
    },
    {
      title: "Cyclone Eloise",
      description: "Mozambique, South Africa, Zimbabwe, and eSwatini in January 2021",
      imgUrl: projImG5,
    },
    {
      title: "Cyclone Jobo",
      description: "Madagascar in February 2021",
      imgUrl: projImG6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Recent Disasters</h2>
                <p>Know the recently affected areas across the world hit by disasters and the cause for them to take place to stay prepared for future.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Earthquake</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tsunami</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cyclone</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
