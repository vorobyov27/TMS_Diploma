import { Given, When, Then } from '@wdio/cucumber-framework';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Page } from '../pageObject/pageFactory/pages'
import { ComponentFactory } from '../pageObject/componentFactory/componentFactory';
import { Components } from '../pageObject/componentFactory/components';


Given(/^I am on the Live page$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.open();
})

Then(/^Event has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.eventItem.waitForDisplay();
})

Then(/^Event is not displayed$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.eventItem.waitForDisappear()
})

Then(/^See All football link has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.seeAllLinkFootball.waitForDisplay()
})

Then(/^Betslip is not displayed$/, async () => {
    const component = ComponentFactory.getComponent(Components.Betslip)
    await component.selectionLabel.waitForDisappear()
})

When(/^I click See all football link$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.seeAllLinkFootball.waitForClickableElement()
    await cururrentPage.seeAllLinkFootball.click()
})

When(/^I click on event item to open Event page$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.eventItem.waitForClickableElement();
    await cururrentPage.eventItem.click();
})

When(/^I click favourites icon$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.favStarIcon.waitForClickableElement()
    await cururrentPage.favStarIcon.click();
})

When(/^I click favourites sports icon$/, async () => {
    const component = ComponentFactory.getComponent(Components.SportsItemsBar)
    await component.favouritesOff.waitForClickableElement()
    await component.favouritesOff.click()
})

When(/^I click Football sports icon$/, async () => {
    const component = ComponentFactory.getComponent(Components.SportsItemsBar)
    await component.footballOff.waitForClickableElement()
    await component.footballOff.click()
})

Then(/^Favourites sport icon active appears$/, async () => {
    const component = ComponentFactory.getComponent(Components.SportsItemsBar)
    await component.favouritesOn.waitForDisplay()
})

Then(/^Football sport active icon has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.SportsItemsBar)
    await component.footballOn.waitForDisplay()
})

Then(/^Football sport inactive icon has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.SportsItemsBar)
    await component.footballOff.waitForDisplay()
})

Then(/^Collapsed category has been appeared$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.collapsedCategory.waitForDisplay()
})

When(/^I add selection to betslip$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.eventSelection.waitForClickableElement()
    await cururrentPage.eventSelection.click();
})

Then(/^Betslip selection has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Betslip)
    await component.selectionLabel.waitForDisplay()
    await component.placeBetInactive.waitForDisplay()
})

When(/^I enter valid bet to betslip$/, async () => {
    const component = ComponentFactory.getComponent(Components.Betslip)
    await component.keyboard9button.waitForClickableElement()
    await component.keyboard9button.click()
})

Then(/^Active Place bet button appears$/, async () => {
    const component = ComponentFactory.getComponent(Components.Betslip)
    await component.placeBetActive.waitForDisplay()
})

When(/^I remove selection from Betslip$/, async () => {
    const component = ComponentFactory.getComponent(Components.Betslip)
    await component.removeButton.waitForClickableElement()
    await component.removeButton.click()
})

Then(/^Live tab active has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.liveTabOn.waitForDisplay()
})

Then(/^Prematch tab active has been appeared$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.sportTabOn.waitForDisplay()
})

When(/^I switch to Prematch tab$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.sportTabOff.waitForClickableElement()
    await component.sportTabOff.click()
})

When(/^I click on Join now link$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.joinPageLink.waitForClickableElement()
    await component.joinPageLink.click()
})

When(/^I close cookie popup$/, async () => {
    const cururrentPage = PageFactory.getPage(Page.Live)
    await cururrentPage.cookieButton.waitForClickableElement()
    await cururrentPage.cookieButton.click()
    await cururrentPage.cookieButton.waitForDisappear()
})

When(/^I click on Login link$/, async () => {
    const component = ComponentFactory.getComponent(Components.Header)
    await component.loginLink.waitForClickableElement()
    await component.loginLink.click()
})

