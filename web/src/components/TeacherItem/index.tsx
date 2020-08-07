import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

// interface PageHeaderProps {
//   title: string;
// }

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/25043104?s=460&u=061953520c10daf61f35fe6e2960956bb45b6f2f&v=4"
          alt="Gilmaicor Leandro"
        />
        <div>
          <strong>Gilmaicor Leandro</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>blablabla</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
