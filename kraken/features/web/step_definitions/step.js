const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function(email) {
    let element = await this.driver.$('input.email.ember-text-field.gh-input.ember-view');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function(password) {
    let element = await this.driver.$('input.password.ember-text-field.gh-input.ember-view');
    return await element.setValue(password);
});

When('I click login', async function() {
    let element = await this.driver.$('button.login');
    return await element.click();
});

When('I click pages', async function() {
    let element = await this.driver.$('#ember33');
    return await element.click();
});

When('I click new page', async function() {
    let element = await this.driver.$('a.ember-view.gh-btn.gh-btn-primary.view-actions-top-row');
    return await element.click();
});

When('I click page title', async function() {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.click();
});

When('I click page description', async function() {
    let element = await this.driver.$('div.koenig-editor__editor.__mobiledoc-editor.__has-no-content');
    return await element.click();
});

Then('I click publish', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
});

Then('I click continue final review', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-large');
    return await element.click();
});

Then('I click publish page right now', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
});

Then('I click page published', async function() {
    let element = await this.driver.$('div.gh-post-bookmark-image');
    return await element.click();
});

Then('I click preview', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger');
    return await element.click();
});

Then('I click PC preview', async function() {
    let element = await this.driver.$('div > header > div.gh-post-preview-btn-group > div > button:nth-child(1)');
    return await element.click();
});

Then('I click mobile preview', async function() {
    let element = await this.driver.$('div > header > div.gh-post-preview-btn-group > div > button:nth-child(2)');
    return await element.click();
});

Then('I click social networks preview', async function() {
    let element = await this.driver.$('div > header > div.gh-post-preview-btn-group > div > button:nth-child(3)');
    return await element.click();
});

Then('I click all pages', async function() {
    let element = await this.driver.$('body > div.gh-app > div > main > section > div > header > section > div > div.gh-contentfilter-menu.gh-contentfilter-type > div.ember-view.ember-basic-dropdown-trigger.ember-power-select-trigger.gh-contentfilter-menu-trigger');
    return await element.click();
});

Then('I click published pages', async function() {
    let element = await this.driver.$('#ember293-2');
    return await element.click();
});

Then('I click on a published page', async function() {
    let element = await this.driver.$('a.ember-view permalink.gh-list-data.gh-post-list-title');
    return await element.click();
});

Then('I click unpublish', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey gh-unpublish-trigger');
    return await element.click();
});

Then('I see the dashboard text {string}', async function(dashboard) {
    let element = await this.driver.$('h2.gh-canvas-title.innerHTML');
    expect(element).to.equal(dashboard);
});