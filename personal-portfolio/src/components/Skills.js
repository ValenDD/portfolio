import { Col, Container, Row } from "react-bootstrap"
import { Card, ListGroup } from "react-bootstrap"

export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <Container>
                <h2>Skills</h2>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={4}>
                        <ListGroup>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>JSP</ListGroup.Item>
                            <ListGroup.Item>JPA</ListGroup.Item>
                            <ListGroup.Item>JUnit</ListGroup.Item>
                            <ListGroup.Item>Servlets</ListGroup.Item>
                            <ListGroup.Item>Webservices</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} md={4}>
                        <ListGroup>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>SQL</ListGroup.Item>
                            <ListGroup.Item>Godot</ListGroup.Item>
                            <ListGroup.Item>Regular Expressions</ListGroup.Item>
                            <ListGroup.Item>Design Pattern</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}