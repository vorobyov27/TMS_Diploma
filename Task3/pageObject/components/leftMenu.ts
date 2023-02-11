import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class LeftMenu {
    public readonly resultsLink = ElementsManager.getElement('[data-test="default-option--results--off"]', Elements.Link);
    public readonly statisticLink = ElementsManager.getElement('[data-test="default-option--statistics--off"]', Elements.Link);
    public readonly downloadAppLink = ElementsManager.getElement('[data-test="default-option--download_app--off"]', Elements.Link);
    public readonly loyaltyBonusesLink = ElementsManager.getElement('[data-test="default-option--offers--off"]', Elements.Link);
    public readonly promotionsLink = ElementsManager.getElement('[data-test="default-option--promotions--off"]', Elements.Link);
    public readonly sportItemLinkOn = ElementsManager.getElement('[data-test="default-option--sport.live.popular--on"]', Elements.Link);
    public readonly sportItemLinkOff = ElementsManager.getElement('[data-test="default-option--sport.live.popular--off"]', Elements.Link);

    public readonly casinoItemLinkOff = ElementsManager.getElement('[data-test="default-option--casino--off"]', Elements.Link);
    public readonly casinoItemLinkOn = ElementsManager.getElement('[data-test="default-option--casino--on"]', Elements.Link);
    public readonly liveCasinoItemLinkOff = ElementsManager.getElement('[data-test="default-option--live-casino--off"]', Elements.Link);
    public readonly liveCasinoItemLinkOn = ElementsManager.getElement('[data-test="default-option--live-casino--on"]', Elements.Link);
    public readonly liveGamesItemLinkOff = ElementsManager.getElement('[data-test="default-option--live-games--off"]', Elements.Link);
    public readonly virtualSportItemLinkOff = ElementsManager.getElement('[data-test="default-option--virtual-sports--off"]', Elements.Link);

}