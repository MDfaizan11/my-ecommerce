import "../style/contact.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <h2 className="contact_heading"> Contact us</h2>
      <div className="main_contact_wrapper">
        <div className="contact_wrapper">
          <div className="contact_info">
            <h2> Welcome </h2>
            <p> To</p>
            <h2> Khan Bazaar</h2>
            <p>Contact no: 987456321</p>
            <address>plot no. 786 2nd Floor pardi Nagpur maharashtra</address>
            <div className="logoes">
              <FaPhoneVolume className="logo" />
              <FaWhatsapp className="logo" />
              <FaSquareInstagram className="logo" />
            </div>
          </div>

          <div className="contact_form">
            <form
              action="https://formspree.io/f/xeqyeyde"
              method="post"
              className="form"
            >
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="User-Email"
                autoComplete="off"
                required
              />
              <textarea
                name="massage"
                id=""
                cols="30"
                rows="10"
                placeholder="enter your massage"
                required
              ></textarea>
              <div className="form_button">
                <button> submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
