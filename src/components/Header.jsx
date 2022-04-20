import { CSSProperties } from "react";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header style={headerContainer}>
      <img src={Logo} alt="" style={setLogo} />
      <div style={headerText}>
        <p>Log In</p>
        <p style={space}> | </p>
        <p>Sign Up</p>
      </div>
    </header>
  );
}
const headerContainer: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  height: "7rem",
};

const headerText: CSSProperties = {
  display: "flex",
  marginRight: "2rem",
};

const space: CSSProperties = {
  paddingRight: "1rem",
  paddingLeft: "1rem",
};
const setLogo: CSSProperties = {
  display: "flex",
  height: "5rem",
  margin: "1rem",
};
