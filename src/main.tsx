import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FrontendArchery } from "./pages/frontend/Archery.tsx";
import { FrontendNugget } from "./pages/frontend/Nugget.tsx";
import { FrontendInlander } from "./pages/frontend/Inlander.tsx";
import { FrontendDesignsystem } from "./pages/frontend/Designsystem.tsx";
import { FrontendIntelligence } from "./pages/frontend/Intelligence.tsx";
import { FrontendMaskers } from "./pages/frontend/Maskers.tsx";
import { FrontendLightsaber } from "./pages/frontend/Lightsaber.tsx";
import { BackendOcr } from "./pages/backend/Ocr.tsx";
import { BackendDockerDeploy } from "./pages/backend/DockerDeploy.tsx";
import { FirstHackathonPage } from "./pages/hackathon/1st.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/archery",
    element: <FrontendArchery />,
  },
  {
    path: "/project/nugget",
    element: <FrontendNugget />,
  },
  {
    path: "/project/inlander",
    element: <FrontendInlander />,
  },
  {
    path: "/project/designsystem",
    element: <FrontendDesignsystem />,
  },
  {
    path: "/project/intelligence",
    element: <FrontendIntelligence />,
  },
  {
    path: "/project/maskers",
    element: <FrontendMaskers />,
  },
  {
    path: "/project/lightsaber",
    element: <FrontendLightsaber />,
  },
  {
    path: "/project/ocr",
    element: <BackendOcr />,
  },
  {
    path: "/project/docker",
    element: <BackendDockerDeploy />,
  },
  {
    path: "/hackathon/1st",
    element: <FirstHackathonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
