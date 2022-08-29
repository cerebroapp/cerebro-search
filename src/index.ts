export { default as settings } from "./settings";

export const fn = ({ term, actions, settings, display }) => {
  if (!navigator.onLine) return;

  if (settings["Search Link"]) {
    const title = `Search ${term}`;
    const onSelect = () => actions.open(settings["Search Link"] + term);
    return display({ title, onSelect });
  }
};
