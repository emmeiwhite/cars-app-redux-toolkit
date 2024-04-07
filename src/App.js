import React from "react";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

export default function App() {
  return (
    <div className="app">
      <h1> My Car Collection</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
