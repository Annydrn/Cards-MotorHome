import "./App.css";
import Products from "./components/Products";
import Introductions from "./components/Introductions";

function App() {
  const Product1 = {
    modelo: "Beachy 360 ",
    peso: "900",
    largo: "5.084",
    ancho: "2.165",
    personas: "3",
    precio: "$21.990.000",
  };

  const Product2 = {
    modelo: "OnTour 460 ",
    peso: "1.300",
    largo: "6.608",
    ancho: "2.200",
    personas: "3",
    precio: "$33.360.000",
  };

  const Product3 = {
    modelo: "Deluxe Lu ",
    peso: "1.350",
    largo: "6.755",
    ancho: "2.300",
    personas: "4",
    precio: "$35.340.000",
  };

  const Product4 = {
    modelo: "Apero 495 ",
    peso: "1.500",
    largo: "7.220",
    ancho: "2.320",
    personas: "4",
    precio: "$37.390.000",
  };

  const Product5 = {
    modelo: "Bianco Selection 515",
    peso: "1600",
    largo: "7.510",
    ancho: "2.320",
    personas: "5",
    precio: "$37.890.000",
  };

  const Product6 = {
    modelo: "Bianco Active",
    peso: "2.200",
    largo: "9.230",
    ancho: "2.500",
    personas: "6",
    precio: "$53.940.000",
  };

  return (
    <div id="app" className="App">
      <Introductions />
      <Products cardProduct={Product1} />;
      <Products cardProduct={Product2} />;
      <Products cardProduct={Product3} />;
      <Products cardProduct={Product4} />;
      <Products cardProduct={Product5} />;
      <Products cardProduct={Product6} />;
    </div>
  );
}

export default App;
