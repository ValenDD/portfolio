import { useState, useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import navBarIcon1 from '../assets/img/linkedin-logo.svg';
import navBarIcon2 from '../assets/img/github-logo.png';
import navBarIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const { activeLink, setActiveLink } = useState('home');
    const {scrolled, seScorelled} = useState(false); 
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                seScorelled(true);
            } else {
                seScorelled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/valentin-dutra-claudio/"><img src={navBarIcon1} alt=""></img></a>
                            <a href="https://github.com/ValenDD"><img src={navBarIcon2} alt=""></img></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}