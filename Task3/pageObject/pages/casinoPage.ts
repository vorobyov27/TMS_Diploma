import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class CasinoPage extends DefaultPage {
    public open () {
        return super.open('casino/lobby');
    }

    public readonly allGamesTabActive = ElementsManager.getElement('[data-test="categories-menu--all--on"]', Elements.Button);

}