import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CityWeatherProvider } from "./contexts/CityWeatherProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CityWeatherProvider>
      <App />
    </CityWeatherProvider>
  </StrictMode>
);
