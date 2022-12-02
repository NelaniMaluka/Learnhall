import Footer from "../JSX/Footer";
import NavBar from "../JSX/NavBar";

function Booking() {
  return (
    <main>
      <NavBar />
      <section className="d-flex">
        <div className="p-5 border mx-5 my-form rounded mb-3">
          <h3>Book a session</h3>
          <p className="d-flex flex-column">
            <span>
              Please fill out the form below and submit, and we will get back to
              you about your
            </span>
            <span>tutoring needs within 24 business hours.</span>
          </p>
          <div className="d-flex">
            <fieldset className="mx-auto">
              <label htmlFor="flname" className="d-block">
                First Name*
              </label>
              <input
                type="text"
                id="flname"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="lname" className="d-block">
                Last Name*
              </label>
              <input
                type="text"
                id="lname"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <div className="d-flex pt-3">
            <fieldset className="mx-auto">
              <label htmlFor="email" className="d-block">
                Email*
              </label>
              <input
                type="text"
                id="email"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="phone" className="d-block">
                Phone*
              </label>
              <input
                type="text"
                id="phone"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <div className="d-flex pt-3">
            <fieldset className="mx-auto">
              <label htmlFor="sgrade" className="d-block">
                Student Grade*
              </label>
              <input
                type="text"
                id="sgrade"
                className="d-form form-control d-block"
              />
            </fieldset>
            <fieldset className="mx-auto">
              <label htmlFor="zip" className="d-block">
                Zip Code*
              </label>
              <input
                type="text"
                id="zip"
                className="d-form form-control d-block"
              />
            </fieldset>
          </div>
          <label htmlFor="textarea" className="ms-2 mt-5">
            Why does the student need tutoring? (optional)
          </label>
          <textarea name="review" id="textarea" cols="50" rows="8"></textarea>
          <div className="justify-content-center d-flex">
            <button className="btn sub-btn px-4" type="submit">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Booking;
