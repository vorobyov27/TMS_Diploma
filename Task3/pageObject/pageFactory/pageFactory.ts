import { Page as PageType } from './pages';
import { LivePage } from '../pages/livePage';
import { JoinPage } from '../pages/joinPage';
import { EventPage } from '../pages/eventPage';
import { CasinoPage } from '../pages/casinoPage';
import { ResultsPage } from '../pages/resultsPage';
import { StatisticPage } from '../pages/statisticPage';
import { DownloadPage } from '../pages/downloadPage';

export class PageFactory {
    public static getPage(pageType: PageType.Live): LivePage;
    public static getPage(pageType: PageType.Join): JoinPage;
    public static getPage(pageType: PageType.Event): EventPage;
    public static getPage(pageType: PageType.Casino): CasinoPage;
    public static getPage(pageType: PageType.Results): ResultsPage;
    public static getPage(pageType: PageType.Statistic): StatisticPage;
    public static getPage(pageType: PageType.Download): DownloadPage;
    public static getPage(pageType: PageType) {
        switch (pageType) {
            case PageType.Live:
                return new LivePage();
            case PageType.Join: 
                return new JoinPage(); 
            case PageType.Event:
                return new EventPage();
            case PageType.Casino:
                return new CasinoPage(); 
            case PageType.Results:
                return new ResultsPage(); 
            case PageType.Statistic:
                return new StatisticPage();  
            case PageType.Download:
                return new DownloadPage();        
            default:
                throw new Error(`Page factory is not implemented for ${pageType}`)
        }
    }
}