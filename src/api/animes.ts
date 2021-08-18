import { gql } from '@apollo/client'


export const GetAllAnimes = gql`
query Animes($first: Int){
  anime (first:$first){
    nodes{
      averageRating
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
  }
}
    `