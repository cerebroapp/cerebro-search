enum SearchEngines {
  Google,
  Brave,
  DuckDuckGo,
  Ecosia,
}

/**
 * @returns A valid options array with each search engine name and label
 */
const generateOptions = () => {
  const options: Array<{ value: string; label: string }> = [];

  for (let value in SearchEngines) {
    const isValueProperty = Number(value) >= 0;
    if (isValueProperty) options.push({ value, label: SearchEngines[value] });
  }
  return options;
};

export default {
  "Search Engine": {
    type: "option",
    options: generateOptions(),
    defaultValue: "a",
    description: "Select a search engine",
  },
  "Search Link": {
    type: "string",
    description:
      "The link your search engine uses to search. I.e.\nhttps://google.com/search?q=",
  },
};
