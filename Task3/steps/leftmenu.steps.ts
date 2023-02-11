import { When, Then } from '@wdio/cucumber-framework';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Page } from '../pageObject/pageFactory/pages'
import { ComponentFactory } from '../pageObject/componentFactory/componentFactory';
import { Components } from '../pageObject/componentFactory/components';

When(/^I open left menu via header$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.leftMenuButton.waitForClickableElement()
    await component.leftMenuButton.click()
})

Then(/^Result link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.resultsLink.waitForDisplay()
})

Then(/^Statistic link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.statisticLink.waitForDisplay()
})

Then(/^Download link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.downloadAppLink.waitForDisplay()
})

Then(/^Loyalty link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.loyaltyBonusesLink.waitForDisplay()
})

Then(/^Promotions link has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.promotionsLink.waitForDisplay()
})

Then(/^Sport active option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.sportItemLinkOn.waitForDisplay()
})

Then(/^Sport inactive option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.sportItemLinkOff.waitForDisplay()
})

Then(/^Casino inactive option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.casinoItemLinkOff.waitForDisplay()
})

Then(/^Casino active option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.casinoItemLinkOn.waitForDisplay()
})

Then(/^Live Casino inactive option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.liveCasinoItemLinkOff.waitForDisplay()
})

Then(/^Live Games inactive option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.liveGamesItemLinkOff.waitForDisplay()
})

Then(/^Virtual Sports inactive option has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.virtualSportItemLinkOff.waitForDisplay()
})

When(/^I click Casino inactive option to open Casino page$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.casinoItemLinkOff.waitForClickableElement()
    await component.casinoItemLinkOff.click()
})

Then(/^All Games active tab has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Casino)
    await cururrentPage.allGamesTabActive.waitForDisplay()
})

When(/^I click Results option to open Results page$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.resultsLink.waitForClickableElement()
    await component.resultsLink.click()
})

Then(/^Scroll tab results has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Results)
    await cururrentPage.scrollTabs.waitForDisplay()
})

When(/^I click Statistic option to open Statistic page$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.statisticLink.waitForClickableElement()
    await component.statisticLink.click()
})

Then(/^Tournament statistic list has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Statistic)
    await cururrentPage.statisticLayout.waitForDisplay()
})

When(/^I click Download option to open Download page$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.downloadAppLink.waitForClickableElement()
    await component.downloadAppLink.click()
})

Then(/^Download promo title has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Download)
    await cururrentPage.downloadPromoTitle.waitForDisplay()
})

When(/^I click Loyalty option$/, async () => {
    const component = ComponentFactory.getComponent(Components.LeftMenu)
    await component.loyaltyBonusesLink.waitForClickableElement()
    await component.loyaltyBonusesLink.click()
})