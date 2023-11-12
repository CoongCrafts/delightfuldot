export function assert(condition: unknown, message?: string) {
  if (condition) {
    return;
  }

  throw new Error(message);
}

/**
 * Throw out error if condition is undefined, false, null, '' or 0
 *
 * @param condition
 * @param message
 */
export function assertFalse(condition: unknown, message?: string) {
  assert(!condition, message);
}