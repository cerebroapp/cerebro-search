import { google, duckduckgo, ecosia } from "handlers";
import { Engine, EngineHandler } from "types";
import icon from "./icons/default.png";

const Engines: Record<Engine, EngineHandler> = {
  Google: google,
  DuckDuckGo: duckduckgo,
  Ecosia: ecosia,
  Brave: () => {},
};

export const fn = ({ term, actions, settings, display }) => {
  if (!navigator.onLine) return;

  // handle custom search engine
  if (settings["Search Link"]) {
    const title = `Search ${term}`;
    const onSelect = () => actions.open(settings["Search Link"] + term);
    return display({ title, onSelect, icon });
  }

  // handle built-in search engines
  const engine = Engines[settings["Search Engine"] as Engine] || Engines.Google;
  return engine({ term, actions, display });
};

export { default as settings } from "./settings";
