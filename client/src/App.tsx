import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import {
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { element: <Landing />, index: true },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <DashboardLayout /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
