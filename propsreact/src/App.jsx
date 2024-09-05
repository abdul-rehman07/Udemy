import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import componentsImg from "./assets/react.svg";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcept({image,title,description}) {
  return (
    <li>
      <img src={image} alt="..." />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <>
      <main>
        <section id="core-concepts">
          <h2 >Core concept</h2>
          <ul>
            <CoreConcept
            {...CORE_CONCEPTS[0]}
            />
     
            <CoreConcept
         {...CORE_CONCEPTS[1]}
            />
     
            <CoreConcept
  {...CORE_CONCEPTS[2]}
            />
     
            <CoreConcept
        {...CORE_CONCEPTS[3]}
            />
     
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
