import { Components as ComponentType } from './components';
import { Betslip } from '../components/betSlip';
import { Header } from '../components/header';
import { LeftMenu } from '../components/leftMenu';
import { SportsItemsBar } from '../components/sportsItemsBar';
import { Login } from '../components/login';

export class ComponentFactory {
    public static getComponent(componentType: ComponentType.Betslip): Betslip;
    public static getComponent(componentType: ComponentType.Header): Header;
    public static getComponent(componentType: ComponentType.LeftMenu): LeftMenu;
    public static getComponent(componentType: ComponentType.SportsItemsBar): SportsItemsBar;
    public static getComponent(componentType: ComponentType.Login): Login;
    public static getComponent(componentType: ComponentType) {
        switch (componentType) {
            case ComponentType.Betslip:
                return new Betslip();
            case ComponentType.Header: 
                return new Header(); 
            case ComponentType.LeftMenu:
                return new LeftMenu();  
            case ComponentType.SportsItemsBar:
                return new SportsItemsBar();
            case ComponentType.Login:
                return new Login();         
            default:
                throw new Error(`Page factory is not implemented for ${componentType}`)
        }
    }
}