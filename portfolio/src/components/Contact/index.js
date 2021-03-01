import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
    return (
        <div className="Contact">
            <Container>
                <Row className="TopContact">
                    <Col>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>Portsmouth, NH</p>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <p>603-923-3614</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="BottomContact">
                    <Col>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:jmk4u14@gmail.com"><p className="link">Email Me</p></a>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacobmkrueger/"><p className="link">My LinkedIn</p></a>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faGithub} />
                        <a target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity"><p className="link">My Github</p></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}