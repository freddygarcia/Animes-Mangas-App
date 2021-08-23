import { gql } from "@apollo/client";


export const GetAllMangas = gql`
query GetMangas($first: Int, $after: String){
    rows: manga (first:$first, after: $after){
      pageInfo {
        startCursor
        endCursor
      }
  
      nodes {
        averageRating
        description
        startDate
        chapterCount
        volumeCount
        bannerImage {
          original {
            url
          }
        }
        id
        status
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
  item : findMangaById(id: $id) {
    averageRating
    description
    startDate
    volumeCount
    chapterCount

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
        startDate
        bannerImage {
          original {
            url
          }
        }
        id
        status
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
