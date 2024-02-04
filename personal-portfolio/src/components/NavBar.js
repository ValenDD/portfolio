import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navBarIcon1 from '../assets/img/linkedin-logo.svg';
import navBarIcon2 from '../assets/img/github-logo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0); // New state to track the previous scroll position
    const [visible, setVisible] = useState(true); // New state to control navbar visibility

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Set scrolled state based on scroll position for styling
            setScrolled(currentScrollPos > 50);

            // Determine navbar visibility
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70)
                || currentScrollPos < 10);

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, scrolled]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    return (
        <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${visible ? "" : "navbar-hidden"}`}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'ProjectSlider' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ProjectSlider')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/valentin-dutra-claudio/"><img src={navBarIcon1} alt=""></img></a>
                            <a href="https://github.com/ValenDD"><img src={navBarIcon2} alt=""></img></a>
                        </div>
                        <button className="vvd" onClick={() => window.location.href = 'mailto:valentindutra99@gmail.com'}><span>Let’s Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}