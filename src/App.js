
import './App.css';
import {Header} from './component/common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./component/common/Footer";

import "./css/style.css";
import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
