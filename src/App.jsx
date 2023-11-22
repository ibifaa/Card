import { Card } from "./components/Card";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="grid grid-cols-1">
      <div className=" ">
        <Card />
      </div>
      <div className="">
        <Products />
      </div>
    </div>
  );
}

export default App;
