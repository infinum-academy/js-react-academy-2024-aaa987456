import { Ishows } from "@/app/typings/shows";
import { ShowsComponent } from "../ShowsComponent/ShowsComponent"

const mockedShow: Ishows = {
    title: "Brooklyn Nine-Nine",
    description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD 99th Precinct.",
    image_url: "/assets/brooklyn.jpg",
    averageRating: 0
  };

export const ShowCard =()=>{
    return <ShowsComponent show={mockedShow}/>
}