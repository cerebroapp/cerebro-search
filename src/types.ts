export type EngineArgs = {
  term: string;
  actions: Record<string, any>;
  display: ({}) => void;
};
export type EngineHandler = (args: EngineArgs) => void;

export type Suggestion = {
  title: string;
  description?: string;
};

export type SuggestionGetter = (term: string) => Promise<Suggestion[]>;

export type Engine = "Google" | "DuckDuckGo" | "Ecosia" | "Brave";
