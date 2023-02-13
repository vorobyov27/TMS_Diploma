import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class SportsItemsBar {
    public readonly popularOn = ElementsManager.getElement('[data-test="icon--popular--on"]', Elements.Button);
    public readonly popularOff = ElementsManager.getElement('[data-test="icon--popular--off"]', Elements.Button);
    public readonly footballOn = ElementsManager.getElement('[data-test="icon--football--on"]', Elements.Button);
    public readonly footballOff = ElementsManager.getElement('[data-test="icon--football--off"]', Elements.Button);
    public readonly favouritesOff = ElementsManager.getElement('[href="/sport/live/favorites"]', Elements.Button);
    public readonly favouritesOn = ElementsManager.getElement('[href="/sport/live/favorites"][class*="item--active"]', Elements.Button);
    
}