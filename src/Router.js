import { createBrowserRouter } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import AuthPage from "./pages/AuthPage";
import { Layout } from "./components/common";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
