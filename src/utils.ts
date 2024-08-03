export function assert(predicate: any, msg: string): asserts predicate {
  if (!predicate) {
    throw new Error(msg);
  }
}
