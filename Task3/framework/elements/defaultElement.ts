import { Element } from "webdriverio";
import { Config } from "../helpers/configs";

export abstract class DefaultElement {

    public constructor(private readonly locator: string) {
    }

    protected async getElement(): Promise<Element> {
        return await $(this.locator);
    }

    public async getText() {
        return (await this.getElement()).getText()
    }

    public async waitForDisplay() {
        return (await this.getElement()).waitForDisplayed({timeout: Config.waitTimeout})
    }

    public async waitForDisappear() {
        return (await this.getElement()).waitForDisplayed({timeout: Config.waitTimeout, reverse :true})
    }

    public async waitForClickableElement() {
        return (await this.getElement()).waitForClickable({timeout: Config.waitTimeout})
    }

    public async click() {
        (await this.getElement()).waitForClickable({timeout: Config.waitTimeout})
        return (await this.getElement()).click()
    }
}