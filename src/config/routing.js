import { createBrowserRouter } from "react-router-dom";
import { ContactPage } from "../components/ContactPage/ContactPage";
import { OfferPage } from "../components/OfferPage/OfferPage";
import { MainContent } from "../components/MainContent/MainContent";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    errorElement: <p>some error</p>,
    children: [
      { index: true, element: <p>home page</p> },
      { path: "/kontakt", element: <ContactPage /> },
      { path: "/o-nas", element: <div>o nas...</div> },
      { path: "/oferta/:id", element: <OfferPage /> },
    ],
  },
]);
