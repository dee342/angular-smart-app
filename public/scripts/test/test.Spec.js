// 1. test fxitures
describe('karma-json-fixtures-preprocessor', function() {
  it('loads the fixtures', function() {
    expect(window.__fixtures__['test/fixtures/test'].a).toBe(5);
  });

  it('tranforms fixture file name to camelCase if config option `camelizeFilenames` is set to true', function() {
    expect(window.__fixtures__['test/fixtures/fooBar'].foo).toBe('bar');
  });

  it('person.json should parse correctly', function() {
    expect(window.__fixtures__['test/fixtures/person'].state).toBe('Available');
  });
});

