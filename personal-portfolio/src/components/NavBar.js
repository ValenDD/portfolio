import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import navBarIcon1 from '../assets/img/linkedin-logo.svg';
import navBarIcon2 from '../assets/img/github-logo.png';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
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