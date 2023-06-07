import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home, Events, StartupSchool, Pitch} from "./pages"
import { RecentEvent,UpcomingEvent } from "./components";
// import StartupSchool from "./pages/StartupSchool";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} >
      <Route path="recent" element={<RecentEvent />} />
      <Route path="upcoming" element={<UpcomingEvent />} />
      </Route>
      <Route path="/startup-school" element={<StartupSchool />} />
      <Route path="/pitch" element={<Pitch />} />
    </Routes>
   </Router>
  );
}

export default App;
