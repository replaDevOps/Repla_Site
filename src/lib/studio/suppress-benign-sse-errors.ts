const BENIGN_STUDIO_SSE_PATTERNS = [
  /No activity within \d+ milliseconds\./,
  /Failed to listen for pinned items/,
  /Failed to establish EventSource connection/,
  /Failed to connect to the dashboard store/,
];

function getErrorMessage(value: unknown): string {
  if (typeof value === "string") return value;
  if (value instanceof Error) return value.message;
  if (typeof value === "object" && value !== null && "message" in value) {
    return String((value as { message: unknown }).message);
  }
  return "";
}

function isBenignStudioSseError(value: unknown): boolean {
  const message = getErrorMessage(value);
  if (!message) return false;
  return BENIGN_STUDIO_SSE_PATTERNS.some((pattern) => pattern.test(message));
}

/** Sanity Studio uses SSE listeners that reconnect after 45s idle — not app failures. */
export function suppressBenignStudioSseErrors() {
  if (typeof window === "undefined") return () => {};

  const originalConsoleError = console.error;

  console.error = (...args: unknown[]) => {
    if (args.some(isBenignStudioSseError)) return;
    originalConsoleError.apply(console, args as Parameters<typeof console.error>);
  };

  const onWindowError = (event: ErrorEvent) => {
    if (isBenignStudioSseError(event.error) || isBenignStudioSseError(event.message)) {
      event.preventDefault();
    }
  };

  const onUnhandledRejection = (event: PromiseRejectionEvent) => {
    if (isBenignStudioSseError(event.reason)) {
      event.preventDefault();
    }
  };

  window.addEventListener("error", onWindowError);
  window.addEventListener("unhandledrejection", onUnhandledRejection);

  return () => {
    console.error = originalConsoleError;
    window.removeEventListener("error", onWindowError);
    window.removeEventListener("unhandledrejection", onUnhandledRejection);
  };
}
