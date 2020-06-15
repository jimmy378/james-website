declare interface IHome {
  title: string
  body: string
  logo: string
  sections: {
    title: string
    body: string
  }[]
  skills: {
    title: string
    body: string
  }[]
}

declare interface IProject {
  body: string
  feature: string
  images: string[]
  slug: string
  title: string
  type: string
  video: string
  iframe: string
}

declare interface IProjectNode {
  node: IProject
}

declare interface IPageInfo {
  hasNextPage: boolean
  perPage: number
  totalCount: number
  itemCount: number
}

declare interface IAllProjectsYaml {
  edges: IProjectNode[]
  pageInfo: IPageInfo
}
