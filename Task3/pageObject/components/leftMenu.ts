import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';
import { Menu } from './menuItems';

export class LeftMenu {
    getLink(item: Menu, state: string) {
        return ElementsManager.getElement(`[data-test="default-option--${item}--${state}"]`, Elements.Link)
    }
}