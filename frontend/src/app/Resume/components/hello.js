


export default function Hello() {
  return (
    <section id="hello" className="section">

      <div className="container">
        <div className="row">
          <div className="col-md-6 about-img-wrap">
            <div className="about-img wow slideInRight">
              <img
                src="./images/hero.jpg"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me wow slideInLeft">
              <div className="about-me-title">
                <h1><span className="point">I am Shivalal Prasad</span></h1>
              </div>
              <div className="about-me-text">
                <div className="opacity-box">
                  <p>
                    I am a Web Developer located in Telangana, India. I
                    currently Freelancer. I am looking to take on more work
                    and to increase my skills as a Web Developer.
                  </p>
                </div>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Phone</span>
                  <span>+91 – 8019323606</span>
                </p>
                <p>
                  <span className="span-title">Email</span>
                  <span>
                    <a href="mailto:shivalalprasad@flash.co">shivalalprasad@flash.co</a></span>
                </p>
                <p>
                  <span className="span-title">Address</span>
                  <span>
                    sangem, Narsullabad, Kamareddy, Telangana – 503301</span>
                </p>
                <p>
                  <span className="span-title">Social</span>
                  <span className="span-icons">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/shivalal_prasad"
                      className="mdi fonts-icons mdi-instagram"></a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/shivalalprasad"
                      className="mdi fonts-icons mdi-linkedin"></a>
                    <a
                      target="_blank"
                      href="https://github.com/shivalalprasad"
                      className="mdi fonts-icons mdi-github-circle"></a>
                  </span>
                </p>
              </div>
              <div className="about-btns">
                <a></a>
                <a
                  href="https://drive.google.com/file/d/1AdQqd0N2A97cKKPD6EaqCBx1nVaeyin6/view"
                  className="site-btn dgray-btn"
                  target="_blank">
                  Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
