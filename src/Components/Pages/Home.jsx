import SemiCircle from "../img/topEllipse.png";
import Tutor from "../img/tutor&student.png";
import "../CSS/styles.css";
import Steps from "../JSX/Steps";
import { Link } from "react-router-dom";
import Hero from "../JSX/Hero";
import Footer from "../JSX/Footer";
import Subtract3 from "../img/subtract3.png";
import ReviewSlide from "../JSX/ReviewSlide";
import NavbarEx from "../JSX/NavbarEx";
import TutorSm from "../img/tutor-sm.png";

function Home() {
  return (
    <main>
      <section className="">
        <img src={SemiCircle} alt="" className="draw1" />
        <NavbarEx />
      </section>
      <Hero />
      <Steps />
      <section className="text-center mt-4">
        <h1>What parents are saying</h1>
        <span>
          Read the reviews below to see what students' parents are saying about
        </span>
        <br />
        <span>Learnhall on Google for our tutoring serivces.</span>
        <div className="review-container">
          <ReviewSlide />
        </div>
      </section>
      <section className="tutor-sect">
        <img
          src={Subtract3}
          alt="icon"
          style={{ height: "150px" }}
          className="sub-tut"
        />
        <div className="d-flex">
          <div className="tutor px-3 px-lg-5 mx-auto ms-lg-2">
            <h1>Want to become a tutor with Learnhall?</h1>
            <aside>
              We hire tutors from a variety of backgrounds both in the US and
              internationally. We pride ourselves on our tutor onboarding
              process and high industy pay. Our tutors work in-person and
              online, and we garner regular inquiries for all academic and test
              prep subjects at all age levels.
              <br />
              If you want to work with us, please click the button below to fill
              out a short form and we will be in contact within 24-48 hours for
              a prospective interview.
            </aside>
            <img src={TutorSm} alt="Tutor" className="tutor-sm mt-2" />
            <button className="btn become-btn mt-2">
              <Link to="/become-tutor">Become a Tutor</Link>
            </button>
          </div>
          <div className="tutor-images">
            <div className="back-image position-absolute">
              <div className="rect2 position-absolute start-40">
                <img src={Tutor} alt="Tutor & Student" className="top-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
