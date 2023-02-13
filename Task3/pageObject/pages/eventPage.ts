import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class EventPage extends DefaultPage {
    public readonly eventInfo = ElementsManager.getElement('[data-test="eventinformerlayout"]', Elements.Label);

}