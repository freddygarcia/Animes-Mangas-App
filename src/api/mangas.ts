import { gql } from "@apollo/client";


export const GetAllMangas = gql`
query GetMangas($first: Int) {
    rows: manga(first: $first) {
      pageInfo {
        startCursor
        endCursor
      }
  
      nodes {
        bannerImage {
          original {
            url
          }
        }
        id
        status
        averageRating
        categories(first: 2) {
          nodes {
            title
          }
        }
        posterImage {
          original {
            url
          }
        }
        titles {
          canonical
        }
      }
    }
  }
`
export const GetManga = gql`
query getManga($id: ID!) {
    item: findMangaById(id: $id) {
      averageRating
      description
      startDate
  
      categories(first: 3) {
        nodes {
          title
        }
      }
      posterImage {
        original {
          url
        }
      }
      titles {
        canonical
      }
    }
  }
`
export const GetMangasByTitle = gql`
query searchMangaBytitle($first: Int, $title: String!, $after: String) {
    rows: searchMangaByTitle(first: $first, title: $title, after: $after) {
      pageInfo {
        startCursor
        endCursor
      }
  
      nodes {
        bannerImage {
          original {
            url
          }
        }
        id
        status
        averageRating
        chapterCount
        categories(first: 2) {
          nodes {
            title
          }
        }
        posterImage {
          original {
            url
          }
        }
        titles {
          canonical
        }
      }
    }
  }
  
`
