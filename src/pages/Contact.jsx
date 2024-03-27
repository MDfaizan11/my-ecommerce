function Contact() {
  return (
    <>
      <h2> Contact us</h2>
      <div className="contact_location"></div>

      <div className="contact_form">
        <form action="https://formspree.io/f/xeqyeyde" method="post">
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
          ></textarea>
          <button> submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
