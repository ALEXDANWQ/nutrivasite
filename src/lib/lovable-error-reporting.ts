type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LovableErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

let isReportingLovableError = false;

function normalizeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack?.slice(0, 6_000),
    };
  }

  if (typeof error === "string") {
    return { name: "Error", message: error };
  }

  return { name: "UnknownError", message: "Unknown client error" };
}

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (isReportingLovableError) return;

  const captureException = window.__lovableEvents?.captureException;
  if (!captureException) return;

  try {
    isReportingLovableError = true;
    captureException(
      normalizeError(error),
      {
        source: "react_error_boundary",
        route: window.location.pathname,
        ...context,
      },
      {
        mechanism: "react_error_boundary",
        handled: true,
        severity: "error",
      },
    );
  } catch {
    // Error reporting must never become the error the user sees.
  } finally {
    isReportingLovableError = false;
  }
}
