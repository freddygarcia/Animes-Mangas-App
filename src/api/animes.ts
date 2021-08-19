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
      averageRating
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
  findAnimeById(id:$id) {
      averageRating
      description
      youtubeTrailerVideoId
      episodeCount
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
}`