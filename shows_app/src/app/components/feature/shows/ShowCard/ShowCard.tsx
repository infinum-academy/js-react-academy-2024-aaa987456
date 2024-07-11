import { IShows } from "@/app/typings/shows"
import { StarIcon } from "@chakra-ui/icons"
import { Card ,CardBody,Image,Text,Box, Icon} from "@chakra-ui/react"
import NextLink from "next/link"

export interface IShowCard{
   show:IShows
   
}
export const ShowCard =({show}:IShowCard)=>{

    return(
        <Box>
            
        <Card  as={NextLink} href={`/all-shows/${show.id}`}>
          <Image maxHeight ="60%" src={show.image_url} alt={show.title} />
          <CardBody>
            <Text color="#3f117c" fontWeight="bold">{show.title}</Text>
            <Text><Icon as={StarIcon} color="#3f117c"/> {show.average_rating}/5</Text>
          </CardBody>
        </Card>
       
      </Box>

    )
    
}