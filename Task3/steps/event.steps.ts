import { Then } from '@wdio/cucumber-framework';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Page } from '../pageObject/pageFactory/pages'

Then(/^EventInfo has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live);
    await cururrentPage.eventInfo.waitForDisplay();
})

