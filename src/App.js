import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />}> */}
        <Route index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}> */}
          
        {/* </Route> */}
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
