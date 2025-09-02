import cors from "cors";
import morgan from "morgan";

const middleware = (app) => {
  app.use(cors());
  app.use(morgan("combined"));
};

export default middleware;
