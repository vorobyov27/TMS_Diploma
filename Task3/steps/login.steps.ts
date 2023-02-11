import { When, Then } from '@wdio/cucumber-framework';
import { ComponentFactory } from '../pageObject/componentFactory/componentFactory';
import { Components } from '../pageObject/componentFactory/components';

Then(/^Login field has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Login)
    await component.loginField.waitForDisplay()
})

Then(/^Password field has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Login)
    await component.passwordField.waitForDisplay()
})

Then(/^Submit button has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Login)
    await component.submitButton.waitForDisplay()
})

Then(/^Join now popup link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Login)
    await component.joinNowLink.waitForDisplay()
})

When(/^I click Join now popup link$/, async () => {
    const component = ComponentFactory.getComponent(Components.Login)
    await component.joinNowLink.waitForClickableElement()
    await component.joinNowLink.click()
})
