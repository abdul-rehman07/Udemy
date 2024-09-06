import CoreConcept from "./components/CoreConcept.jsx";
import "./App.css";
import { CORE_CONCEPTS } from "./data.js";



function App() {
  return (
    <>
      <main>
        <section id="core-concepts">
          <h2 class="h2-class">Core concept</h2>
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
