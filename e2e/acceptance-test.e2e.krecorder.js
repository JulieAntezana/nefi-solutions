var assert = require('assert');

describe('katalon', function() {

	it('should do something', function() {
		browser.url('http://localhost:4200/flowers/NaN');
		$('//input[@type=\'text\']').click();
		$('//img[@alt=\'Petals Surprise\']').click();
		$('=View').click();
		browser.url('http://localhost:4200/flowers/NaN');
		$('=Edit').click();
		$('//div[@id=\'groupList\']/div[4]/button').click();
		$('//button[@type=\'submit\']').click();
		browser.url('http://localhost:4200/flowers');
		$('//input[@type=\'text\']').click();
		$('//input[@type=\'text\']').setValue('petals');
		await $('//input[@type=\'text\']').sendKeys(Key.ENTER);
		$('//img[@alt=\'Petals Surprise\']').click();
		$('=Edit').click();
		$('//floral-root').click();
		$('(.//*[normalize-space(text()) and normalize-space(.)=\'Flowers in Arrangements\'])[2]/following::div[2]').click();
		$('//input[@type=\'text\']').click();
		$('//input[@type=\'text\']').click();
		$('//input[@type=\'text\']').doubleClick();
		$('//input[@type=\'text\']').setValue('');
		$('//button[@type=\'submit\']').click();
		$('//div[@id=\'cdk-drop-list-0\']/div/floral-flower-item/a/div/h4').click();
	});

});