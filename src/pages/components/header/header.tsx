import React from "react";
import Logo from "../../../../public/logoClara.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="Main">
      <div className="Header">
        <div>
          <Image className="logo" src={Logo} alt="Logo-BeneFit" />
        </div>
        <div className="Clicaveis">
          <a href="#">Início</a>
          <a href="#">Seja Cliente</a>
          <a href="#">Contato</a>
          <button className="Login">Fazer login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
