import { Col, Container, Row } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"

export const Skills = () => {

    return (
        <section id="skills" className="skills-section">
            <Container>
                <h2>Knowledge</h2>
                <Row className="justify-content-center">
                    <Col md={4}>
                        <ListGroup className="fashionable-list">
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">Java</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">JSP</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">JPA</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">JUnit</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">Servlets</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">Bootstrap</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="fashionable-list">
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>SQL</ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/GGJUY2024" className="link-skills" target="_blank" rel="noopener noreferrer">Godot</a></ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/Regular-Expressions" className="link-skills" target="_blank" rel="noopener noreferrer">Regular Expressions</a></ListGroup.Item>
                            <ListGroup.Item>Database Optimization</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="fashionable-list">
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">Webservices</a></ListGroup.Item>
                            <ListGroup.Item>Design Patterns</ListGroup.Item>
                            <ListGroup.Item>GitHub</ListGroup.Item>
                            <ListGroup.Item>Scrum</ListGroup.Item>
                            <ListGroup.Item><a href="https://github.com/ValenDD/TrabajoUy" className="link-skills" target="_blank" rel="noopener noreferrer">HTML/CSS</a></ListGroup.Item>
                            <ListGroup.Item>Software Architect</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

