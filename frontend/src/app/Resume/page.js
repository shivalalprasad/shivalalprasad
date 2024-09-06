'use client'
import Navbar from '../components/navbar';
import Education from './components/education';
// import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header'
import Hello from './components/hello'
import Portfolio from './components/portfolio';
import Skills from './components/skills';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
export default function Resume() {
  return (
    <>
      <script src="./js/jquery-2.2.3.min.js" defer></script>
      <script src="./js/bootstrap.min.js" defer></script>
      <script src="./js/jquery.placeholder.min.js" defer></script>
      <script src="./js/mixitup.min.js" defer></script>
      <script src="./js/wow.min.js" defer></script>
      <script src="./js/theme.js" defer></script>
      <title>Resume - Shivalal Prasad</title>
      <Header />
      {/* <Navbar /> */}
      <Hello />
      <Skills />
      {/* <Experience /> */}
      <Education />
      <Portfolio />
      <Footer />
    </>
  );
}
