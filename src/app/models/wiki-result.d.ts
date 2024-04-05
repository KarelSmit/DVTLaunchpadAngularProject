export interface WikiResponse {
  batchcomplete: string
  query: Query
}

export interface Query {
  normalized: Normalized[]
  pages: {[id: string]: {
      pageid: number
      ns: number
      title: string
      extract: string
      thumbnail: Thumbnail
      pageimage: string
    } }
}

export interface Normalized {
  from: string
  to: string
}

export interface Thumbnail {
  source: string
  width: number
  height: number
}
