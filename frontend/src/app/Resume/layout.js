import Education from './components/education';
// import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header'
import Hello from './components/hello'
import Portfolio from './components/portfolio';
import Skills from './components/skills';


export default function RootLayout({ children }) {
  return (
    <resume>
      <Header />
      <Hello />
      <Skills />
      {/* <Experience /> */}
      <Education />
      <Portfolio />
      {children}
      <Footer />
    </resume>
  );
}
