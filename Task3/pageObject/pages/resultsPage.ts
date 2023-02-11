import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class ResultsPage extends DefaultPage {
    public open () {
        return super.open('sport/results');
    }

    public readonly scrollTabs = ElementsManager.getElement('[data-test="tabs-scroll"]', Elements.Label);

}