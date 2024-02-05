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
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>JSP</ListGroup.Item>
                            <ListGroup.Item>JPA</ListGroup.Item>
                            <ListGroup.Item>JUnit</ListGroup.Item>
                            <ListGroup.Item>Servlets</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="fashionable-list">
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>SQL</ListGroup.Item>
                            <ListGroup.Item>Godot</ListGroup.Item>
                            <ListGroup.Item>Regular Expressions</ListGroup.Item>
                            <ListGroup.Item>Database Optimization</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup className="fashionable-list">
                            <ListGroup.Item>Webservices</ListGroup.Item>
                            <ListGroup.Item>Design Patterns</ListGroup.Item>
                            <ListGroup.Item>GitHub</ListGroup.Item>
                            <ListGroup.Item>Scrum</ListGroup.Item>
                            <ListGroup.Item>HTML/CSS</ListGroup.Item>
                            <ListGroup.Item>Software Architect</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

