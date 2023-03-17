import "./App.css";
import { Nav } from "./components/nav/Nav";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { LoginPage } from "./components/loginPage/Login";
import { RecipeCard } from "./components/recipeCard/RecipeCard";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;

const call = async () => {};

// const response = await fetch("http://localhost:3000/api/users", { options });
// const data = await response.json();
