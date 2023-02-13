import { When, Then } from '@wdio/cucumber-framework';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Page } from '../pageObject/pageFactory/pages'
import { ComponentFactory } from '../pageObject/componentFactory/componentFactory';
import { Components } from '../pageObject/componentFactory/components';
import { Menu } from '../pageObject/components/menuItems';

When(/^I open left menu via header$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.leftMenuButton.click()
})

Then(/^(.*) link (.*) has been appeared$/, async (link: string, state: string) => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.getLink(link as unknown as Menu, state).waitForDisplay()
})

When(/^I click (.*) link (.*)$/, async (link: string, state: string) => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.getLink(link as unknown as Menu, state).click()
})

Then(/^All Games active tab has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Casino)
    await cururrentPage.allGamesTabActive.waitForDisplay()
})

Then(/^Scroll tab results has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Results)
    await cururrentPage.scrollTabs.waitForDisplay()
})

Then(/^Tournament statistic list has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Statistic)
    await cururrentPage.statisticLayout.waitForDisplay()
})

Then(/^Download promo title has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Download)
    await cururrentPage.downloadPromoTitle.waitForDisplay()
})