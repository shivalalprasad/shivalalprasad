


export default function Navbar() {
  return (
    <div className="mob-menu-wrapper hidden-md hidden-lg">
      <div className="close-mob-menu">
        <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <div className="mobile-menu">
        <ul>
          <li><a href="#hello">Hello</a></li>
          <li><a href="#skills">Skills</a></li>
          {/* <li><a href="#experience">Experience</a></li> */}
          <li><a href="#education">Education</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>
    </div>
  )
}
