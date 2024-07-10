import { isEdge, isIE } from "./context.js";

function cacheConsoleMethod<K extends keyof Console>(name: K): Console[K] {
  if (console) {
    if (isIE || isEdge) {
      if (name === "log" || name === "clear") {
        return (...args: any[]) => {
          console[name].apply(console, args);
        };
      }
    } else {
      return console[name];
    }
  }

  return (..._args: any[]) => {};
}

export const log = cacheConsoleMethod("log");

export const table = cacheConsoleMethod("table");

export const clear = cacheConsoleMethod("clear");
