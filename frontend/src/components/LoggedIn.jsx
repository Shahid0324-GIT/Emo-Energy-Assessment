import { useNavigate } from "react-router-dom";

import "../index.css";

const LoggedIn = () => {
  const history = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("userInfo");
    history("/");
  };

  return (
    <header>
      <nav className="navbar">
        <img src="https://emoenergy.in/assets/img/logo.png" alt="logo" />
        <h1 className="heading">Emo Energy</h1>
        <button type="button" onClick={onLogout} className="btn">
          Logout
        </button>
      </nav>
      <section>
        <p className="about-para">About Us</p>
        <h2 className="about-head">EMO ENERGY</h2>
        <p className="about-us">
          EMO’s Mission is to Design, Develop & Commercialize Cutting Edge
          Technology for the Masses with a focus on Safety, Reliability &
          Performance. EMO is a team of world class Engineers & Designers that
          are Obsessed with the Idea of Enabling Electric Mobility for all. EMO
          strives to achieve the Impossible by fusing Hardware, Software &
          Experience to Build Products that stand the Test of Time.
        </p>
      </section>
    </header>
  );
};

export default LoggedIn;
