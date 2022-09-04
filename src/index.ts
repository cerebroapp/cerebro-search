import { google, duckduckgo } from "handlers";
import { Engine } from "types";
import icon from "./icons/default.png";

export const fn = ({ term, actions, settings, display }) => {
  if (!navigator.onLine) return;

  // handle custom search engine
  if (settings["Search Link"]) {
    const title = `Search ${term}`;
    const onSelect = () => actions.open(settings["Search Link"] + term);
    return display({ title, onSelect, icon });
  }

  // handle built-in search engines
  switch (settings["Search Engine"] as Engine) {
    case "Google":
      return google({ term, actions, display });
    case "DuckDuckGo":
      return duckduckgo({ term, actions, display });
  }
};

export { default as settings } from "./settings";
