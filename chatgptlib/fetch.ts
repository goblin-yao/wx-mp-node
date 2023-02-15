/// <reference lib="dom" />
import fetch from "node-fetch";
if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export { fetch };
