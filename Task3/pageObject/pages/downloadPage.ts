import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class DownloadPage extends DefaultPage {
    public open () {
        return super.open('download-app');
    }

    public readonly downloadPromoTitle = ElementsManager.getElement('[data-test="promo--title"]', Elements.Label);
}