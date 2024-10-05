
// import localFont from 'next/font/local'
// const NunitoLocal = localFont({ src: './Nunito/Nunito-VariableFont_wght.ttf' })
// const DankMonoItalic = localFont({ src: '../../fonts/DankMono-italic.otf' })

export default function Skills() {
  return (
    // <section id="skills" className={DankMonoItalic.className + " section"}>
    <section id="skills" className=" section">
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
                      Javascript, Node.js,React.js, Next.js,Express.js, MongoDB
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
                      HTML, CSS, SASS, Bootstrap, JavaScript, React.js, Next.js
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
  )
}
