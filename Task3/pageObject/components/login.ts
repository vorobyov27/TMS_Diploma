import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class Login {
    public readonly loginField = ElementsManager.getElement('[data-test="input--login"]', Elements.TextField);
    public readonly passwordField = ElementsManager.getElement('[data-test="input--password"]', Elements.TextField);
    public readonly submitButton = ElementsManager.getElement('[data-test="button--submit--enabled"]', Elements.Button);
    public readonly joinNowLink = ElementsManager.getElement('[class*="joinNowContainer"]', Elements.Link);
}