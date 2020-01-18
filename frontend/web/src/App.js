import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles/global.css";
import "./styles/app.css";
import "./styles/sidebar.css";
import "./styles/main.css";

import SignupForm from "./components/SignupForm";
import DevItem from "./components/DevItem";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/devs");

      setDevs(response.data);
    })();
  }, []);

  async function sendSignup(signup) {
    const response = await api.post("/devs", signup);

    // Add dev to list
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <SignupForm onSubmit={sendSignup} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
