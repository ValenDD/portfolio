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
        <section id="s  kills" className="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Projects Resume</h2>
                            <br></br>
                            <br></br>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={project} alt="Image" />
                                    <h5>trabajoUy</h5>
                                </div>
                                <div className="item">
                                    <img src={game_godot} alt="Image" />
                                    <h5>Laughter of Madness</h5>
                                </div>
                                <div className="item">
                                    <img src={project} alt="Image" />
                                    <h5> C++ Backend</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
