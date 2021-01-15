import React from "react";

import Logo from "../../assets/logo.svg";

import InfoLink from "./InfoLink";
import { Container, Infos, LogoNav } from "./styles";

//Navbar component
//full width component. Logo + LINKS
const Loadnav = () => {
  return (
    <Container>
      <div className="content nav">
        <LogoNav href="#">
          <img src={Logo} alt="Loadsmart logo" />
        </LogoNav>
        <Infos>
          <InfoLink text="BOOK" PATH="/" />
          <InfoLink text="SHIPMENTS" PATH="/" active />
          <InfoLink text="HISTORY" PATH="/about" />
          <InfoLink text="ACCOUNT" PATH="/" />
        </Infos>
      </div>
    </Container>
  );
};

export default Loadnav;
