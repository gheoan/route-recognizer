interface RouteHandler {
  name?: string | string[];
  generationUsesHref?: boolean;
  href?: string;
}

interface ConfigurableRoute {
  path: string;
  handler: RouteHandler;
  caseSensitive: boolean;
}

interface HandlerEntry {
  handler: RouteHandler;
  names: string[];
}

interface RecognizedRoute {
  handler: RouteHandler;
  params: Object;
  isDynamic: boolean;
}

interface CharSpec {
  invalidChars?: string;
  validChars?: string;
  repeat?: boolean;
}

interface StateTypes {
  statics: number,
  dynamics: number,
  stars: number
}
