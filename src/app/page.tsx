import Header from "../components/Header";

import Features from "../components/Features";
import Functions from "../components/Functions";

import Pricing from "../components/Pricing";
import Card from "../components/Cards/card1"
export default function Home() {
  return (
    <main>
      <Header />
      <Features />

      <Functions />
      <Card/>

      <Pricing />
    </main>
  );
}
