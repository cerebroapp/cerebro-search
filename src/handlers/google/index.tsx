import { EngineHandler, Suggestion } from "types";
import icon from "icons/google.png";
import ShowSuggestions from "components/ShowSuggestions";

const SUGGESTIONS_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&q=";

const SEARCH_URL = "https://www.google.com/search?q=";

const google: EngineHandler = ({ term, actions, display }) => {
  const title = `Search ${term} with Google`;

  const searchFn = (q: string) => {
    actions.open(`${SEARCH_URL}${q}`);
    actions.hideWindow();
  };

  display({
    title,
    icon,
    onSelect: () => searchFn(term),
    getPreview: () => (
      <ShowSuggestions
        suggestionGetter={getSuggestions}
        term={term}
        searchFn={searchFn}
      />
    ),
  });
};

export default google;

/**
 * Get google suggestions for entered query
 */
const getSuggestions = async (term: string) => {
  return fetch(`${SUGGESTIONS_URL}${term}`)
    .then((response) => response.json())
    .then((response) => (response[1] || []) as string[])
    .then((res) => res.map(mapToSuggestion));
};

const mapToSuggestion = (suggestion: string): Suggestion => ({
  title: suggestion,
});
