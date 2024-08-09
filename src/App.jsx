import "./App.css";
import Header from "./components/Layout/header";

function App() {
  return (
    <div
      style={{
        display: "grid",
        minHeight: "100vh",
        placeContent: "flex-start",
        background: "#452",
        overflow: "auto",
      }}
    >
      <Header />
    </div>
  );
}

export default App;
