export function isDbUnavailableError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const code = (err as { code?: unknown }).code;
  if (typeof code === "string") {
    return ["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ETIMEDOUT"].includes(code);
  }
  const message = (err as { message?: unknown }).message;
  if (typeof message === "string") {
    return message.includes("getaddrinfo ENOTFOUND");
  }
  return false;
}
