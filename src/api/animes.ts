import { gql } from '@apollo/client'


export const GetAllAnimes = gql`
query GetAnimes($first: Int, $after: String){
  rows: anime (first:$first, after: $after){
    pageInfo{
      startCursor
      endCursor
    }
    nodes{
      id
      startDate
      youtubeTrailerVideoId
      averageRating
      episodeLength
      description
      episodeCount
      totalLength
       categories (first:2){
         nodes{
           title
         }
       }
       posterImage{
         original{
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

export const GetAnime = gql`
query GetAnime($id: ID!) {
  item: findAnimeById(id:$id) {
      averageRating
      description
      startDate
      youtubeTrailerVideoId
      episodeLength
      episodeCount
       categories (first:3){
         nodes{
           title
         }
       }
       posterImage{
         original{
           url
         }
       }
      titles {
        canonical 
      }
  }
}
`

export const GetAnimesByTitle = gql`
query searchAnimeByTitle($first: Int, $title: String!, $after: String) {
    rows: searchAnimeByTitle(first: $first, title: $title, after: $after) {
      pageInfo {
        startCursor
        endCursor
      }
  
      nodes {
        youtubeTrailerVideoId
        bannerImage {
          original {
            url
          }
        }
        id
        status
        averageRating
        episodeCount
        totalLength
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