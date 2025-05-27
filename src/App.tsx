import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pastel-ui-website/pages/Root";
import HomePage from "./pastel-ui-website/pages/HomePage";
import AccordionPage from "./pastel-ui-website/pages/AccordionPage";
import ButtonPage from "./pastel-ui-website/pages/ButtonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/accordion",
        element: <AccordionPage />,
      },
      {
        path: "/button",
        element: <ButtonPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
