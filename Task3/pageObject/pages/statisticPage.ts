import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class StatisticPage extends DefaultPage {
    public open () {
        return super.open('sport/tournaments');
    }

    public readonly statisticLayout = ElementsManager.getElement('[data-test="app-frame--scores"]', Elements.Button);

}