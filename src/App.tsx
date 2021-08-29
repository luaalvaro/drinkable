import { useContext } from "react";
import { DrinkableContext } from "./contexts/DrinkableContext";


function App() {

  const { menuIsOpen, toggleMenu } = useContext(DrinkableContext)

  return (
    <div>

    </div>
  );
}

export default App;
