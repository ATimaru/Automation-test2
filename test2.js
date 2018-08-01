//test2.js
describe('Page manipulation Test Case', function() {
  it('goes to draw.io', () => {
   browser.waitForAngularEnabled(false);
   browser.get('https://www.draw.io');
    var decideLater = element(by.css('body > div.geDialog > div > div:nth-child(3)'));
    decideLater.click();
    browser.sleep(1000);

    var pageMenu = element(by.css('.geSprite.geSprite-dots'));
    pageMenu.click();
    browser.sleep(1000);

    var insertPageButton = element(by.css('body > div.mxPopupMenu.geMenubarMenu > table > tbody > tr:nth-child(3) > td:nth-child(2)'));
    insertPageButton.click();
    browser.sleep(1000);

    var page2 = element(by.css('div[title=Page-2]'));
    expect(page2.isDisplayed()).toBeTruthy();

    pageMenu.click();
    browser.sleep(1000);

    var deleteButton = element(by.css('body > div.mxPopupMenu.geMenubarMenu > table > tbody > tr:nth-child(6) > td:nth-child(2)'));
    deleteButton.click();
    browser.sleep(1000);
    expect(page2.isPresent()).toEqual(false);

    pageMenu.click();
    browser.sleep(1000);

    var renameOption = element(by.css('body > div.mxPopupMenu.geMenubarMenu > table > tbody > tr:nth-child(6) > td:nth-child(2)'));
    renameOption.click();
    browser.sleep(1000);
    var renameInputField = element(by.css('body > div.geDialog > table > tbody > tr:nth-child(1) > td:nth-child(2) > input'));
    renameInputField.sendKeys('New Shapes');
    browser.sleep(1000);
    var renameButton = element(by.css('.geBtn.gePrimaryBtn'));
    renameButton.click();
    browser.sleep(1000);

    var renamedPage = element(by.css('.geActivePage'));
    expect(renamedPage.isDisplayed()).toBeTruthy();

    pageMenu.click();
    browser.sleep(1000);

    var duplicateOption = element(by.css('body > div.mxPopupMenu.geMenubarMenu > table > tbody > tr:nth-child(8) > td:nth-child(2)'));
    duplicateOption.click();
    browser.sleep(1000);
    var duplicatedPage = element(by.css('.geActivePage'));
    expect(duplicatedPage.isDisplayed()).toBeTruthy();
  });
});
