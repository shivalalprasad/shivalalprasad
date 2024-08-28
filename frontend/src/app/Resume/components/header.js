import Navbar from "./navbar";



export default function Header() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="css/master.css" />
      <link rel="shortcut icon" href="images/favicon.jpg" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Roboto"
        rel="stylesheet"
      />
      <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css"
        rel="stylesheet" />
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-8 slideInLeft">
              <div className="logo">
                <span className="point">Shivalal Prasad</span>
              </div>
            </div>
            <div className="col-md-9 hidden-sm hidden-xs slideInRight">
              <div className="main-menu">
                <ul className="list-inline">
                  <li><a href="#hello">Hello</a></li>
                  <li><a href="#skills">Skills</a></li>
                  {/* <li><a href="#experience">Experience</a></li> */}
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
      <Navbar />
    </>
  )
}
