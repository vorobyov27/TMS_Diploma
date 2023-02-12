import superagent from "superagent"

export class RequestWrapper {
    readonly baseUrl = "https://petstore.swagger.io/v2/";
  
    constructor(readonly path: string, readonly method: string, readonly data?: string) {}
  
    protected get req() {
      const agent = superagent.get(this.baseUrl + this.path);
      agent.method = this.method;
      switch (this.method) {
        case "post":
        case "put":
          agent.send(this.data)
          break;
      }
      agent.set('Content-Type', 'application/json')
      agent.catch((res) => res);
      return agent;
    }

    public async getResponse() {
        return await this.req;
    }
}