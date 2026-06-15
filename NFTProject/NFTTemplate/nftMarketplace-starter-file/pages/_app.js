import "../styles/globals.css";

// INTERNAL IMPORT
import { Navbar,Footer } from "../components/componentindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default MyApp;
