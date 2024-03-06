import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: 'qqmm6kc7',
    dataset: 'production',
    apiVersion: '2024-03-06',
    useCdn: true,
}) 

const imgBuilder = ImageUrlBuilder(client);


export const urlFor =(source)=> imgBuilder.image(source)