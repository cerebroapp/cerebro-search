import { EngineHandler } from "types";

const google: EngineHandler = ({ term, actions, display }) => {
  const title = `Search ${term} with google`;

  display({ title });
};

export default google;
