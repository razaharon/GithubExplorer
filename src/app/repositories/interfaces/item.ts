export interface Item {
  id: number,
  name: string,
  private: boolean,
  html_url: string,
  owner: {
    login: string,
    avatar_url: string,
    html_url: string
  }
}
