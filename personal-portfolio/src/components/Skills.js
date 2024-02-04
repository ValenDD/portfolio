import { Col, Container, Row } from "react-bootstrap"
import { Card, ListGroup } from "react-bootstrap"

export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <Container>
                <p>Technology and Softskills</p>
                <Row>
                    <div className="skills-bx">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>SQL</ListGroup.Item>
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>Java</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}