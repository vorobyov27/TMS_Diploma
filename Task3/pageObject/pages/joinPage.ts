import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class JoinPage extends DefaultPage {
    public open () {
        return super.open('join');
    }

    public readonly joinLayout = ElementsManager.getElement('[data-test="app-frame--join"]', Elements.Label);

}