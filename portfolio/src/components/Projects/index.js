import "../styles.css";
import { Container, Row } from 'reactstrap';
import Carousel from "react-bootstrap/Carousel";
import TimeCapsule from "../../assets/Time Capsule.png";
import RecipEZ from "../../assets/Recip-EZ.png";
import ReadMe from "../../assets/ReadMe.PNG";
import Day2Day from "../../assets/Day 2 Day.png";
import NoteTaker from "../../assets/Note Taker.png";
import QuizTime from "../../assets/It's Quiz Time.png";

export default function Project() {
  return (
    <div className="FullScreen">
      <Container className="Project">
          <div className="Project">
            <Row>
              <h2 className="header">Look through the slides of my portfolio and click on the picture to be taken directly to the project! If you would like to see my full repository, click <a className="link" target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity"> here!</a></h2>
            </Row>
            <br></br>
            <Row>
            <Carousel>
              <Carousel.Item>
                <a target="_blank" rel="noreferrer" href="https://github.com/kcushing1/Time-Capsule"><img src={TimeCapsule} alt="Time Capsule repository" /></a>
                  <Carousel.Caption>
                    <h1>The Time Capsule</h1>
                    <h3>Travel through time and learn about exchange rates, weather, and popular NY Times articles at your fingertips!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a target="_blank" rel="noreferrer" href="https://github.com/kcushing1/Recipe-Organizer">
                  <img src={RecipEZ} alt="Recip-EZ repository" /></a>
                  <Carousel.Caption>
                    <h1>Recip-EZ</h1>
                    <h3>Log into your very own online recipe saver filled with your favorite books, sites, and personal recipes!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity/ReadMe-Generator">
                  <img src={ReadMe} alt="README Generator repository" /></a>
                  <Carousel.Caption>
                    <h1>README Generator</h1>
                    <h3>Download your very own README Generator where you can make professional looking README files by answering some questions!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity/Day-2-Day">
                  <img src={Day2Day} alt="Day-2-Day repository" /></a>
                  <Carousel.Caption>
                    <h1>Day-2-Day</h1>
                    <h3>Plan out your days with a scheduler that you can adjust each and every day!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity/Note-Taker">
                  <img src={NoteTaker} alt="Note Taker repository" /></a>
                  <Carousel.Caption>
                    <h1>Note Taker</h1>
                    <h3>Write out some notes that you can't possibly forget! Add, edit, and delete files that are saved right inside the program!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a target="_blank" rel="noreferrer" href="https://github.com/GeminiTrinity/Its-Quiz-Time">
                  <img src={QuizTime} alt="Quiz Time repository" /></a>
                  <Carousel.Caption>
                    <h1>It's Quiz Time!</h1>
                    <h3>Test your Javascript knowledge and get the high score of this timed quiz game!</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Row>
          </div>
      </Container>
    </div>
  );
}
