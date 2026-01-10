import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Wellness } from "./pages/Wellness.jsx";
import { ActivitiesPage } from "./pages/Activities.jsx";
import { Blog } from "./pages/Blog.jsx";
// import { Contact } from "./pages/Contact.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Booking } from "./pages/Booking.jsx";
import { Rooms } from "./pages/Rooms.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/homePage" element={<HomePage />} /> */}
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/wellness" element={<Wellness />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/roomsAvailable" element={<Rooms />} />
    </Routes>
  );
}

export default App;
