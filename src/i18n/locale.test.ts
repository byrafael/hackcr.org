import { describe, expect, it } from "vite-plus/test";

import { detectBrowserLocale, readStoredLocale, resolveInitialLocale } from "./locale.ts";

describe("locale resolution", () => {
  it("uses the stored locale before browser preferences", () => {
    const storage = {
      getItem: () => "es",
    };

    expect(resolveInitialLocale({ storage, languages: ["en-US", "es-CR"] })).toBe("es");
  });

  it("resolves english from browser preferences in order", () => {
    expect(detectBrowserLocale(["en-US", "es-CR"])).toBe("en");
  });

  it("resolves spanish from browser preferences in order", () => {
    expect(detectBrowserLocale(["es-CR", "en-US"])).toBe("es");
  });

  it("defaults to spanish when browser preferences are unsupported", () => {
    expect(resolveInitialLocale({ storage: null, languages: ["fr-FR", "de-DE"] })).toBe("es");
  });

  it("ignores invalid stored locale values", () => {
    const storage = {
      getItem: () => "pt-BR",
    };

    expect(readStoredLocale(storage)).toBeNull();
    expect(resolveInitialLocale({ storage, languages: ["fr-FR"] })).toBe("es");
  });
});
