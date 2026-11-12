declare global {
  interface Window {
    fbq?: (
      action: "track" | "trackCustom" | "init",
      event: string,
      params?: Record<string, unknown>,
    ) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackLead() {
  trackMetaEvent("Lead", {
    content_name: "Combo Bí Kíp Hài Hước + Bí Kíp Tán Gái",
    currency: "VND",
    value: 199000,
  });

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      currency: "VND",
      value: 199000,
    });
  }
}
