const { browser } = require('protractor');
// import { browser } from 'protractor';

// e2e/integration-test.e2e.spec.ts
describe('My App', function() {
  it('should navigate to the home page', async function() {
    await browser.get('/');
    const title = await browser.getTitle();
    expect(title).toEqual('Floral Arrangements');
  });

  // Add more tests as needed
});
