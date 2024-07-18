import { vi, expect, test, beforeAll, afterAll, afterEach } from 'vitest';

declare global {
  var expect: typeof expect;
  var test: typeof test;
  var beforeAll: typeof beforeAll;
  var afterAll: typeof afterAll;
  var afterEach: typeof afterEach;
  var vi: typeof vi;
}