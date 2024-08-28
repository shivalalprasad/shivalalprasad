


export default function Footer() {
  return (
    <>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="flex justify-around col-md-12 wow zoomIn">
              <div className="copyright self-center">
                <p>copyright &copy; 2024 Shivalal Pradad</p>
              </div>
              <div className="flex justify-evenly gap-8">
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
  )
}
