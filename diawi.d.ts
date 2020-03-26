declare module "diawi" {
  export default class Diawi {
    constructor(params: { token: string; path: string })
    on(event: string, callback: (data: any) => void)
    execute()
  }
}
