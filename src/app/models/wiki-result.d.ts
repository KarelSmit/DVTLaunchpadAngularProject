export interface WikiResponse {
  batchcomplete: string
  query: Query
}

export interface Query {
  normalized: Normalized[]
  pages: Pages
}

export interface Normalized {
  from: string
  to: string
}

export interface Pages {
  'id': Page
}

export interface Page {
  pageid: number
  ns: number
  title: string
  extract: string
  thumbnail: Thumbnail
  pageimage: string
}

export interface Thumbnail {
  source: string
  width: number
  height: number
}
