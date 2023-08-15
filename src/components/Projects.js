import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import backgroundVideo from "../assets/img/vi.mp4";



export const Projects = () => {
  const projects = [
    {
      title: "Torist Site",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Python Games",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Text Util",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "OCR",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Spotify Clone",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Machine learning",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "HTML CSS JS",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      {/* Background Video */}
      <video  className="background-video" autoPlay loop muted>
        <source src={backgroundVideo}  type="video/mp4"/>
        
      </video>

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          AUR PORJECT DALUGA TAB DEKHNA . Abhi TAB1 me dekhte
                          raho
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          AUR PORJECT DALUGA TAB DEKHNA . Abhi TAB1 me dekhte
                          raho
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
