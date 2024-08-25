'use client'

import './css/master.css'


export default function Resume() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-8 slideInLeft">
              <div className="logo">
                <span className="point">Tanya Singh</span>
              </div>
            </div>
            <div className="col-md-9 hidden-sm hidden-xs slideInRight">
              <div className="main-menu">
                <ul className="list-inline">
                  <li><a href="#hello">Hello</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xs-4 hidden-lg hidden-md slideInRight">
              <div className="mobile-btn">
                <span><i className="mdi mdi-menu" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mob-menu-wrapper hidden-md hidden-lg">
        <div className="close-mob-menu">
          <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
        </div>
        <div className="mobile-menu">
          <ul>
            <li><a href="#hello">Hello</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </div>
      </div>
      <section id="hello" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-img-wrap">
              <div className="about-img wow slideInRight">
                <img
                  src="https://previews.aspirity.com/danny/media/hello-section/image.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me wow slideInLeft">
                <div className="about-me-title">
                  <h1><span className="point">I am Tanya Singh</span></h1>
                </div>
                <div className="about-me-text">
                  <div className="opacity-box">
                    <p>
                      I am a Web Developer located in Uttar Pradesh, India. I
                      currently work as a part time Remote Junior Web Developer
                      for Coolor, located Noida. I am looking to take on more work
                      and to increase my skills as a Web Developer.
                    </p>
                  </div>
                </div>
                <div className="about-me-info">
                  <p>
                    <span className="span-title">Phone</span>
                    <span>+91 – 9149090169</span>
                  </p>
                  <p>
                    <span className="span-title">Email</span>
                    <span>taniyasinghsaini@gmail.com</span>
                  </p>
                  <p>
                    <span className="span-title">Address</span>
                    <span>
                      Linepar, Near Taron Wali Zarat, Moradabad – 244 001</span>
                  </p>
                  <p>
                    <span className="span-title">Social</span>
                    <span className="span-icons">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/tanyiaz_world"
                        className="mdi fonts-icons mdi-instagram"></a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/tanya06395"
                        className="mdi fonts-icons mdi-linkedin"></a>
                      <a
                        target="_blank"
                        href="https://github.com/tanyaaa05"
                        className="mdi fonts-icons mdi-github-circle"></a>
                    </span>
                  </p>
                </div>
                <div className="about-btns">
                  <a
                    href="https://drive.google.com/file/d/1Vyq37n5Haklmy5YN7QMSdT5cOFPPcz3p/view"
                    className="site-btn dgray-btn"
                    target="_blank">
                    Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <div className="container">
          <div className="row wave-bg">
            <div className="zigzag wow slideInLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 wow slideInLeft">
              <div className="section-sidebar">
                <h2><span className="point">Skills</span></h2>
                <div className="opacity-box">
                  <p>
                    I am inspired by creating great work with people who are as
                    passionate as I am about building something awesome.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 wow zoomIn">
                  <div className="advantages-box">
                    <h4>Web Development</h4>
                    <div className="opacity-box">
                      <p>
                        Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js,
                        MongoDB, Redis, PostgreSQL, WebStorm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn">
                  <hr className="mobile-hr" />
                  <div className="advantages-box">
                    <h4>UI\UX Design</h4>
                    <div className="opacity-box">
                      <p>
                        Photoshop, Illustrator, Sketch, Axure, XMind, Prototyping,
                        Wireframing, User Research, Usability Testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 wow zoomIn">
                  <hr />
                  <div className="advantages-box">
                    <h4>Frontend Development</h4>
                    <div className="opacity-box">
                      <p>
                        HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Drupal,
                        Phonegap / Cordova, Ionic, Foundation, Angular.js.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow zoomIn">
                  <hr />
                  <div className="advantages-box">
                    <h4>Consulting & SEO Audit</h4>
                    <div className="opacity-box">
                      <p>
                        Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO,
                        Google Analytics, ChartBeat, CrazyEgg.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="section">
        <div className="container">
          <div className="row wave-bg">
            <div className="zigzag wow slideInLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   " />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 wow slideInLeft">
              <div className="section-sidebar">
                <h2><span className="point">Experience</span></h2>
                <div className="opacity-box">
                  <p>
                    I partner with startups, organizations and Fortune 500
                    companies to build digital products that help clients overcome
                    challenges and create lasting connections with millions of
                    people every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 right-box">
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="about-row">
                    <h4 className="about-tittle">Web Developer</h4>
                    <p className="about-info">Coolor Studio</p>
                    <p>May, 2014 — Present</p>
                    <div className="opacity-box">
                      <p>
                        Designed and developed user-friendly website, including
                        optimized check-out page that increased user clicks, and
                        subsequently customer purchases by 20%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="about-row">
                    <h4 className="about-tittle">Middle Frontend Developer</h4>
                    <p className="about-info">Illskill Agency</p>
                    <p>Jan, 2013 — May, 2014</p>
                    <div className="opacity-box">
                      <p>
                        Leading a small team on a variety of development projects
                        and delivering solutions to meet and exceed clients’
                        briefs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="about-row">
                    <h4 className="about-tittle">IT Specialist</h4>
                    <p className="about-info">Motion Studio</p>
                    <p>Dec, 2009 — Jan, 2013</p>
                    <div className="opacity-box">
                      <p>
                        Revamped web application security applications, minimizing
                        hacker attacks from 2.3% to 0.02%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="section">
        <div className="container">
          <div className="row wave-bg">
            <div className="zigzag wow slideInLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"

                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 wow slideInLeft">
              <div className="section-sidebar">
                <h2><span className="point">Education</span></h2>
                <div className="opacity-box">
                  <p>
                    All my life I have been driven by my strong belief that
                    education is important. I try to learn something new every
                    single day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 right-box">
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="about-row">
                    <h4 className="about-tittle">Google Developer Training</h4>
                    <p className="about-info">Google</p>
                    <p>Apr, 2015 — May, 2015</p>
                    <div className="opacity-box">
                      <p>
                        Learn to use App Engine, Google's Platform as a Service,
                        to build the backend for web apps that scale not only as
                        your user base grows but as request volumes peaks with
                        sudden demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="about-row">
                    <h4 className="about-tittle">Software Development</h4>
                    <p className="about-info">Boston University</p>
                    <p>Jan, 2005 — May, 2009</p>
                    <div className="opacity-box">
                      <p>
                        BSc (Hons) in Software Development. Outstanding Academic
                        Achievement Award.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="section section-small-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title wow slideInLeft">
                <h2><span className="point">Portfolio</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio-sort wow slideInLeft">
                <ul className="list-inline">
                  <li className="colored-link" data-mixitup-control data-filter="all">
                    All projects
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".web-sites"
                  >
                    Web sites
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".ui-ux-design"
                  >
                    UI\UX design
                  </li>
                  <li
                    className="colored-link"
                    data-mixitup-control
                    data-filter=".frontend"
                  >
                    Frontend
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio">
                <div className="row">
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="patty"
                      title="Shop web app “Patty”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Shop web app “Patty”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>April, 2017</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="phoenix"
                      title="Startup website “Phoenix”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Startup website “Phoenix”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>March, 2016</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="ewesta"
                      title="Corporate chat “eWesta”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Corporate chat “eWesta”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>December, 2015</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="foody"
                      title="Restaraunt web app “Foody”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Restaraunt web app “Foody”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>May, 2014</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix ui-ux-design wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="stark"
                      title="Game website “Stark”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-5.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Game website “Stark”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>June, 2014</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="te4h"
                      title="Blogger website “Te4h”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-6.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Blogger website “Te4h”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>April, 2014</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="lamp"
                      title="Product website “Lamp”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-7.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Product website “Lamp”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>December, 2013</span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-md-3 col-sm-6 col-xs-6 mix ui-ux-design wow flipInX"
                  >
                    <a
                      data-toggle="modal"
                      data-target="#portfolio-modal"
                      data-name="zebra"
                      title="Blog web app “Zebra”"
                      href="#"
                      className="portfolio-box"
                    >
                      <div className="portfolio-img">
                        <img
                          src="https://previews.aspirity.com/danny/media/portfolio-images/portfolio-8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="portfolio-name">
                        <span>Blog web app “Zebra”</span>
                      </div>
                      <div className="portfolio-date">
                        <span>March, 2013</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 wow zoomIn">
              <div className="copyright">
                <p>&copy; 2024 TS</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="./js/jquery-2.2.3.min.js"></script>
      <script src="./js/bootstrap.min.js"></script>
      <script src="./js/jquery.placeholder.min.js"></script>
      <script src="./js/mixitup.min.js"></script>
      <script src="./js/wow.min.js"></script>
      <script src="./js/theme.js"></script>
    </>
  );
}
