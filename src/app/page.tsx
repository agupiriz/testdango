'use client'
import Campaign from "./components/Campaign";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ModalCart from "./components/ModalCart";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <Campaign />
      <NavBar />
      <Hero />
      <Products />
      <ModalCart />
    </div>
  );
}
