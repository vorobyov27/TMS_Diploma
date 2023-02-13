import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';
import { Betslip } from '../components/betSlip';

export class LivePage extends DefaultPage {
    public open () {
        return super.open('sport/live/popular');
    }

    public readonly eventItem = ElementsManager.getElement('.b-event__about', Elements.Button);
    public readonly eventInfo = ElementsManager.getElement('[data-test="eventinformerlayout"]', Elements.Label);
    public readonly eventSelection = ElementsManager.getElement('[data-test="selection--main"]', Elements.Button);
    public readonly favStarIcon = ElementsManager.getElement('[data-test="favoritestar"]', Elements.Button);
    public readonly seeAllLinkFootball = ElementsManager.getElement('[data-test="button--see-all"][href="/sport/live/26418"]', Elements.Link);
    public readonly collapsedCategory = ElementsManager.getElement('[data-test="subleague--collapsed"]', Elements.Link);
    public readonly cookieButton = ElementsManager.getElement('[data-test="button--cookie-message-accept--enabled"]', Elements.Button);

    
}