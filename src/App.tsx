import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import {
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
  AddJob,
  Stats,
  Admin,
  Profile,
  AllJobs,
} from "./pages";
import { registerAction } from "./pages/Register";
import { loginAction } from "./pages/Login";
import { addJobAction } from "./pages/AddJob";
import QueryProvider from "./providers/queryClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { element: <Landing />, index: true },
      { path: "register", element: <Register />, action: registerAction },
      { path: "login", element: <Login />, action: loginAction },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <AddJob />, action: addJobAction },
          { path: "stats", element: <Stats /> },
          { path: "admin", element: <Admin /> },
          { path: "profile", element: <Profile /> },
          { path: "all-jobs", element: <AllJobs /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
