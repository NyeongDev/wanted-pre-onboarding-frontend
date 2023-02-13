import { createBrowserRouter } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/todo",
        element: <TodoPage />,
      },
      {
        path: "/signup",
        element: <AuthPage />,
      },
      {
        path: "/signin",
        element: <AuthPage />,
      },
    ],
  },
]);

export default router;
