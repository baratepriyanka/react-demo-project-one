import React from "react";


function Contact() {

  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" required placeholder="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required placeholder="email@gmail.com" />
            </div>
            <div>
              <label>Message</label>
              <input type="email" required placeholder="Tell us about youe query..." />
            </div>
            <button type="submit">submit</button>
          </form>
        </main>

      </div>
     

    </>

  );
}


export default Contact;
