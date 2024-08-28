"use client";

export default function Portfolio() {
  const PhysicsClick = () => {
    window.open("https://physics-liart.vercel.app");
  };
  const GmailClick = () => {
    window.open("https://gmail-clone-html-tailwind.vercel.app");
  };
  const YoutubeClick = () => {
    window.open("https://youtube-clone-tailwind-html.vercel.app");
  };
  const RedBusClick = () => {
    window.open("https://red-bus-landing-page-clone.vercel.app");
  };
  const IpdcClick = () => {
    window.open("https://web-page-ui-clone-xi.vercel.app");
  };
  return (
    <section id="portfolio" className="section section-small-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title wow slideInLeft">
              <h2>
                <span className="point">Portfolio</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-sort wow slideInLeft">
              <ul className="list-inline">
                <li
                  className="colored-link"
                  data-mixitup-control
                  data-filter="all"
                >
                  All
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
                  UI\UX
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
                <div className="col-md-3 col-sm-6 col-xs-6 mix web-sites wow flipInX"
                  onClick={PhysicsClick}
                >
                  <a
                    title="Physics Department web app"
                    className="portfolio-box"
                  >
                    <div className="portfolio-img">
                      <img src="./images/Physics.png" />
                    </div>
                    <div className="portfolio-name">
                      <span>Physics Department web app</span>
                    </div>
                    <div className="portfolio-date">
                      <span>June, 2023</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  onClick={RedBusClick}
                >
                  <a
                    title="RedBus - Frontend Clone"
                    className="portfolio-box"
                  >
                    <div className="portfolio-img">
                      <img
                        src="./images/redbus.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-name">
                      <span>RedBus - Frontend Clone</span>
                    </div>
                    <div className="portfolio-date">
                      <span>August, 2024</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  onClick={GmailClick}>
                  <a
                    title="Gmail - Frontend clone"
                    className="portfolio-box"
                  >
                    <div className="portfolio-img">
                      <img
                        src="./images/gmail.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-name">
                      <span>Gmail - Frontend clone</span>
                    </div>
                    <div className="portfolio-date">
                      <span>June, 2024</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 mix frontend wow flipInX"
                  onClick={YoutubeClick}>
                  <a
                    title="Youtube - Frontend"
                    className="portfolio-box"
                  >
                    <div className="portfolio-img">
                      <img
                        src="./images/youtube.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-name">
                      <span>Youtube - Frontend clone</span>
                    </div>
                    <div className="portfolio-date">
                      <span>July, 2024</span>
                    </div>
                  </a>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6 mix ui-ux-design wow flipInX"
                  onClick={IpdcClick}>
                  <a
                    title="IPDC Ui clone"
                    className="portfolio-box"
                  >
                    <div className="portfolio-img">
                      <img
                        src="./images/ipdc.png"
                        alt=""
                      />
                    </div>
                    <div className="portfolio-name">
                      <span>IPDC Ui</span>
                    </div>
                    <div className="portfolio-date">
                      <span>August, 2024</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
