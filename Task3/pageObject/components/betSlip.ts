import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class Betslip {
    public readonly selectionLabel = ElementsManager.getElement('[data-test="betinfo"]', Elements.Label);
    public readonly placeBetInactive = ElementsManager.getElement('[data-test="betslipbutton--inactive"]', Elements.Button);
    public readonly placeBetActive = ElementsManager.getElement('[data-test="betslipbutton--active"]', Elements.Button);
    public readonly keyboard9button = ElementsManager.getElement('[data-test="keyboard-key-normal--9"]', Elements.Button);
    public readonly minimizedViewPanel = ElementsManager.getElement('[data-test="panel--betslippanel"]', Elements.Button);
    public readonly minimizeButton = ElementsManager.getElement('[data-test="button--minimize"]', Elements.Link);
    public readonly removeButton = ElementsManager.getElement('[data-test="removebutton"]', Elements.Button);
}