import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./config/routing";

function App() {
  return (
    <main>
      <RouterProvider router={routerConfig} />
    </main>
  );
}

export default App;
