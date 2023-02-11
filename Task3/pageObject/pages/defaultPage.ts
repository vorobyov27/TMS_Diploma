export abstract class DefaultPage {
    public open (path: string) {
        return browser.url(`https://mobile.marathonbet.by/${path}`)
    }
}