import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Home, Events} from "./pages"
import { RecentEvent,UpcomingEvent } from "./components";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} >
      <Route path="recent" element={<RecentEvent />} />
      <Route path="upcoming" element={<UpcomingEvent />} />
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
