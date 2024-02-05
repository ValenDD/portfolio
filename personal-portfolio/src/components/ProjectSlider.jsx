import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import game_godot from "../assets/img/game-development.png";
import project from "../assets/img/development.png";

export const ProjectSlider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section id="projects" className="projects">
            <Container>
                <Row>
                    <Col className="col-border">
                        <div className="projects-bx">
                            <h2>Projects</h2>
                            <br></br>
                            <Carousel responsive={responsive} infinite={true} className="projects-slider">
                                <div className="item">
                                    <a className="projects-links" href="https://github.com/ValenDD/AprendeIdiomas" target="_blank" rel="noopener noreferrer">
                                        <img src={project} alt="ImageFullstack" />
                                    </a>
                                    <h5><a className="projects-links" href="https://github.com/ValenDD/TrabajoUy" target="_blank" rel="noopener noreferrer">Java</a></h5>
                                </div>
                                <div className="item">
                                    <a className="projects-links" href="https://github.com/ValenDD/AprendeIdiomas" target="_blank" rel="noopener noreferrer">
                                        <img src={game_godot} alt="ImageGame" />
                                    </a>
                                    <h5><a className="projects-links" href="https://github.com/ValenDD/GGJUY2024" target="_blank" rel="noopener noreferrer">Game development</a></h5>
                                </div>
                                <div className="item">
                                    <a className="projects-links" href="https://github.com/ValenDD/AprendeIdiomas" target="_blank" rel="noopener noreferrer">
                                        <img src={project} alt="ImageC++" />
                                    </a>
                                    <h5><a className="projects-links" href="https://github.com/ValenDD/AprendeIdiomas" target="_blank" rel="noopener noreferrer">Simple C++ Project</a></h5>
                                </div>
                                <div className="item">
                                    <a className="projects-links" href="https://github.com/ValenDD/Regular-Expressions" target="_blank" rel="noopener noreferrer">
                                        <img src={project} alt="ImageExpressions" />
                                    </a>
                                    <h5><a className="projects-links" href="https://github.com/ValenDD/Regular-Expressions" target="_blank" rel="noopener noreferrer">Regular Expressions Compiler</a></h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
