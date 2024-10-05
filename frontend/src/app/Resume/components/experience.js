
import localFont from 'next/font/local'
// const NunitoLocal = localFont({ src: './Nunito/Nunito-VariableFont_wght.ttf' })
const DankMonoItalic = localFont({ src: '../../fonts/DankMono-italic.otf' })

export default function Experience() {
  return (
    <section id="experience" className={DankMonoItalic.className + " section"}>
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
  )
}
