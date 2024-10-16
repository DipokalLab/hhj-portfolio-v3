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
import { Card } from "./pages/Card.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { SecondHackathonPage } from "./pages/hackathon/2nd.tsx";
import { ThirdHackathonPage } from "./pages/hackathon/3rd.tsx";
import { FourthHackathonPage } from "./pages/hackathon/4th.tsx";
import { FifthHackathonPage } from "./pages/hackathon/5th.tsx";
import { FrontendFleet } from "./pages/frontend/Fleet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/card",
    element: <Card />,
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
    path: "/project/fleet",
    element: <FrontendFleet />,
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
  {
    path: "/hackathon/2nd",
    element: <SecondHackathonPage />,
  },
  {
    path: "/hackathon/3rd",
    element: <ThirdHackathonPage />,
  },
  {
    path: "/hackathon/4th",
    element: <FourthHackathonPage />,
  },
  {
    path: "/hackathon/5th",
    element: <FifthHackathonPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
