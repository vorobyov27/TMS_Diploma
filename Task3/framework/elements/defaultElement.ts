import { Element } from "webdriverio";

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
        return (await this.getElement()).waitForDisplayed({timeout: 5000})
    }

    public async waitForDisappear() {
        return (await this.getElement()).waitForDisplayed({timeout: 5000, reverse :true})
    }

    public async waitForClickableElement() {
        return (await this.getElement()).waitForClickable({timeout: 5000})
    }

    public async click() {
        (await this.getElement()).click()
    }
}