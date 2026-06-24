import "../styles/globals.css";
import "../styles/mobile.css";

// INTERNAL IMPORT
import { Navbar,Footer } from "../components/componentindex";

const MyApp = ({ Component, pageProps }) => (
  <div style={{ width: '100%', overflowX: 'hidden' }}>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default MyApp;
