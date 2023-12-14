// e2e/example.spec.js
describe('My App', function() {
    it('should navigate to the home page', function() {
      browser.get('/');
      expect(browser.getTitle()).toEqual('Floral Arrangements'); 
    });
  
    // Add more tests as needed
  });
  