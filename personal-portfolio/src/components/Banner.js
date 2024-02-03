import { Container } from "react-bootstrap";
import { ArrowRightCircule } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Backend Developer", "Fullstack Developer", "Functional Analyst" ];
    const period = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section id="home" className="banner">
            <Container>
                <Row className="align-tems-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Hello, I'm Valentin Dutra</span>
                        <h1>{"Hi I'm "}<span className="wrap">{text}</span></h1>
                        <p className="subTagLine">I'm a developer based in Montevideo, Uruguay. I'm passionate about developing projects with any type of technology as i have a lot of flexibility when it comes to learning a new one.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
);
}