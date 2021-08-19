import { gql } from '@apollo/client'


export const GetAllAnimes = gql`
query Animes($first: Int, $after: String){
  rows: anime (first:$first, after: $after){
    pageInfo{
      startCursor
      endCursor
    }
    nodes{
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