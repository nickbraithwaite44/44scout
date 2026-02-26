import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div>
  <header className="App-header">
  {/* Logo linking to your homepage */}
  <a className="App-link" href="/">
    <img 
      src="%PUBLIC_URL%/images/my-logo.png" 
      alt="44Scout Logo" 
      style={{ width: '120px', height: 'auto' }} 
    />
  </a>

  {/* Your custom text */}
  <p className="mt-5">Welcome to 44Scout</p>
  <p>Track and manage scouts with ease, globally.</p>
</header>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
