import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pastel-ui-website/pages/Root";
import HomePage from "./pastel-ui-website/pages/HomePage";
import AccordionPage from "./pastel-ui-website/pages/AccordionPage";
import ButtonPage from "./pastel-ui-website/pages/ButtonPage";
import CardPage from "./pastel-ui-website/pages/CardPage";
import CheckboxPage from "./pastel-ui-website/pages/CheckboxPage";

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
      {
        path: "/card",
        element: <CardPage />,
      },
      {
        path: "/checkbox",
        element: <CheckboxPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
