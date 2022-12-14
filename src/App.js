import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { LandingPage } from "./components/LandingPage";
import { AboutUs } from "./components/AboutUs";
import { LoginPage } from "./components/LoginPage";
import { RecipeCard } from "./components/RecipeCard";
import { SignUpPage } from "./components/SignUpPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
