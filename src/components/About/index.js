import { Container, Row, Col } from 'reactstrap';
import Resume from "../../assets/JacobKruegerResume.pdf"

export default function AboutInfo() {
    return (
    <div className="FullScreen">
        <Container>
            <div className="About">
                <Row>
                <p className="AboutMe">
                    I'm currently a Wireless Sales Consultant and Contact Center Manager for CellularSales of Knoxville Inc. working on my Certificate in Full-Stack Web Development from the University of New Hampshire.
                </p>
                <a className="resume" href ={Resume} download>Download my Resume here!</a>
                </Row>
                <hr /><br></br>
                <Row>
                    <Col><h4>Professional Skills</h4></Col>
                </Row>
                <Row>
                    <Col>Leadership Skills</Col>
                    <Col>Client Relations</Col>
                    <Col>Compassionate Teammate</Col>
                    <Col>Effective Organization Skills</Col>
                    <Col>Eager to Learn New Things</Col>
                </Row>
                <br></br><hr /><br></br>
                <Row>
                    <Col><h4>Technical Skills</h4></Col>
                </Row>
                <br></br>
                <Row>
                    <Col><h5>Programming Languages</h5></Col>
                </Row>
                <Row>
                    <Col>HTML</Col>
                    <Col>CSS</Col>
                    <Col>JavaScript</Col>
                    <Col>JQuery</Col>
                    <Col>MySQL</Col>
                    <Col>MongoDB</Col>
                    <Col>React</Col>
                </Row>
                <br></br>
                <Row>
                    <Col><h5>Software</h5></Col>
                </Row>
                <Row>
                    <Col>Visual Studio Code</Col>
                    <Col>Sony Vegas</Col>
                    <Col>Adobe Premiere</Col>
                    <Col>Adobe Photoshop</Col>
                </Row>
            </div>
        </Container>
    </div>        
    );
}