import { describe, it, expect } from 'vitest';
import { loadPois } from '../src/loadPois';

describe('loadPois', () => {
  it('parses YAML data', () => {
    const pois = loadPois();
    expect(pois.length).toBeGreaterThan(0);
    expect(pois[0].name).toBe('Eiffel Tower');
  });
});
