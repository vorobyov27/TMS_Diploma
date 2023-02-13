import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class Header {
    public readonly liveTabOn = ElementsManager.getElement('[data-test="tab--live--on"]', Elements.Button);
    public readonly liveTabOff = ElementsManager.getElement('[data-test="tab--live--off"]', Elements.Button);
    public readonly sportTabOn = ElementsManager.getElement('[data-test="tab--sport--on"]', Elements.Button);
    public readonly sportTabOff = ElementsManager.getElement('[data-test="tab--sport--off"]', Elements.Button);

    public readonly leftMenuButton = ElementsManager.getElement('[data-test="button--open-left-menu"]', Elements.Button);
    public readonly joinPageLink = ElementsManager.getElement('[data-test="open-join-page--off"]', Elements.Link);
    public readonly loginLink = ElementsManager.getElement('[data-test="button--open-login-popup"]', Elements.Link);

}