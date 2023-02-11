import { Given, When, Then } from '@wdio/cucumber-framework';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Page } from '../pageObject/pageFactory/pages'

Then(/^Join page layout has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Join)
    await cururrentPage.joinLayout.waitForDisplay()
})