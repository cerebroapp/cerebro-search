export type EngineArgs = {
  term: string;
  actions: Record<string, string>;
  display: ({}) => void;
};
export type EngineHandler = (args: EngineArgs) => void;

export type Engine = "Google" | "DuckDuckGo" | "Ecosia" | "Brave";
