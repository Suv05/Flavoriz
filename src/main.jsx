import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux Store/store";
import "./index.css";
import Spinner from "./components/pages/Spinner";
import App from "./components/routes/App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Recipes from "./components/pages/Recipes";
import Mexican, { loader as mexicanLoader } from "./components/Recipes/Mexican";
import Cocktail, {
  loader as cocktailLoader,
} from "./components/Recipes/Cocktail";
import Chinese, { loader as chineseLoader } from "./components/Recipes/Chinese";
import Vegan, { loader as veganLoader } from "./components/Recipes/Vegan";
import TryItOut, {
  loader as tryItOutLoader,
} from "./components/tryitout/TryItOut";
import RecipeDetails, {
  loader as recipesDetailsLoader,
} from "./components/Details/RecipeDetails";
import VeganDetails, {
  loader as VeganDetailsLoader,
} from "./components/Details/VeganDetails";
import MexicanDetails, {
  loader as MexicanDetailsLoader,
} from "./components/Details/MexicanDetails";
import CocktailDetails, {
  loader as CocktailDetailsLoader,
} from "./components/Details/CocktailDetails";
import TryitoutDetails, {
  loader as tryitoutDetailsLoader,
} from "./components/tryitout/TryitoutDetails";
import Favorite from "./components/pages/Favorite";
import Broken from "./components/pages/Broken";

// Main.jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Broken />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="fav" element={<Favorite />} />
      <Route path="recipes" element={<Recipes />}>
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Chinese />
            </Suspense>
          }
          loader={chineseLoader}
        />
        <Route
          path="mexican"
          element={
            <Suspense fallback={<Spinner />}>
              <Mexican />
            </Suspense>
          }
          loader={mexicanLoader}
        />
        <Route
          path="cocktail"
          element={
            <Suspense fallback={<Spinner />}>
              <Cocktail />
            </Suspense>
          }
          loader={cocktailLoader}
        />
        <Route
          path="vegan"
          element={
            <Suspense fallback={<Spinner />}>
              <Vegan />
            </Suspense>
          }
          loader={veganLoader}
        />
        <Route
          path="tryitout"
          element={
            <Suspense fallback={<Spinner />}>
              <TryItOut />
            </Suspense>
          }
          loader={tryItOutLoader}
        />
      </Route>
      <Route
        path="recipes/:id"
        element={
          <Suspense fallback={Spinner}>
            <RecipeDetails />
          </Suspense>
        }
        loader={recipesDetailsLoader}
      />
      <Route
        path="recipes/mexican/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <MexicanDetails />
          </Suspense>
        }
        loader={MexicanDetailsLoader}
      />
      <Route
        path="recipes/cocktail/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <CocktailDetails />
          </Suspense>
        }
        loader={CocktailDetailsLoader}
      />
      <Route
        path="recipes/vegan/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <VeganDetails />
          </Suspense>
        }
        loader={VeganDetailsLoader}
      />
      <Route
        path="recipes/tryitout/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <TryitoutDetails />
          </Suspense>
        }
        loader={tryitoutDetailsLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
