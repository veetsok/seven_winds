import App from "../Layots/App/App";
import Error from "../general.components/Error";

const mainRouter = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
];
export default mainRouter;
