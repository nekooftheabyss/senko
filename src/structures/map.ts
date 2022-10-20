/**
 * Extend map with find and filter till
 * https://github.com/tc39/proposal-policy-map-set
 * is merged
 */

export class Collection<K, V> extends Map<K, V> {
  constructor() {
    super();
  }
  find(condition: (k: K, v: V) => boolean): V | null {
    return this.#find(condition)?.[1] ?? null;
  }
  findKey(condition: (k: K, v: V) => boolean): K | null {
    return this.#find(condition)?.[0] ?? null;
  }
  #find(condition: (k: K, v: V) => boolean): [K, V] | null {
    for (const [k, v] of this.entries()) {
      if (condition(k, v)) {
        return [k, v];
      }
    }
    return null;
  }
}
