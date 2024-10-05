import localFont from 'next/font/local'


const NunitoLocal = localFont({ src: '../../fonts/Nunito/Nunito-VariableFont_wght.ttf' })



export default function Education() {
  return (
    <section id="education" className={NunitoLocal.className + " section"}>
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
                  <h4 className="about-tittle">Bachlor's Degree</h4>
                  <p className="about-info">GASC KMR</p>
                  <p> 2020 — 2023 </p>
                  <div className="opacity-box">
                    <p>
                      Learned so many things related about Tech stack and given more time for them
                      build a landing and bloging web for my college
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  <h4 className="about-tittle">Intermediate [ 10 + 2 ]</h4>
                  <p className="about-info">Bharat Ratna Jr College</p>
                  <p>2018 — 2020 </p>
                  <div className="opacity-box">
                    <p>
                      completed my Intermediate that given me wings to explore the Tech
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
