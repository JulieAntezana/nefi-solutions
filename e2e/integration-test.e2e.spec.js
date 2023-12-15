// e2e/integration-test.e2e.js

describe('My App', () => {
    it('should navigate to the home page', async () => {
      await browser.url('http://34.174.97.158:4200/'); // navigate to the home page
      const title = await browser.getTitle();
      expect(title).toEqual('Floral Arrangements');
    }).timeout(30000);
  
    // Add more tests as needed
});
