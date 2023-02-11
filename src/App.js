import "./App.css";
import { Nav } from "./components/nav/nav";
import { LandingPage } from "./components/landingPage/LandingPage";
import { AboutUs } from "./components/aboutUs/aboutUs";
import { LoginPage } from "./components/loginPage/login";
import { RecipeCard } from "./components/recipeCard/recipeCard";
import { SignUpPage } from "./components/SignUpPage/SignUpPage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return <></>;
}

export default App;

const call = async () => {};

const response = await fetch("http://localhost:3000/api/users", { options });
const data = await response.json();
