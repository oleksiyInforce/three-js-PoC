import GarageScene from "./Components/GarageScene"; // Import the GarageScene component
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Render the GarageScene component */}
      <GarageScene className="w-full h-full relative" />
    </div>
  );
}

export default App;
