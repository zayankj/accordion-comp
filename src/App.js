import React, { Children, useState } from "react";

import "./App.css";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AcordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AcordionItem>
      ))}
      <AcordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={22}
        key="test 1"
      >
        <p>Allows Rect developers to :</p>
        <ul>
          <li>Beak up UI into components </li>
          <li>Make components reusable </li>
          <li>place state efficiency</li>
        </ul>
      </AcordionItem>
    </div>
  );
}

function AcordionItem({ num, title, children, curOpen, onOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handleToggle() {
    onOpen(isOpen ? null : num);
    // setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
