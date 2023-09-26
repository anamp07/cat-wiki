import { Breed } from '@/types/breed'
import type {
    InferGetStaticPropsType,
    GetStaticProps,
    GetStaticPaths,
  } from 'next'
import { ParsedUrlQuery } from 'querystring'

  interface IParams extends ParsedUrlQuery {
    id: string
  }
   
  export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://devchallenges-catwiki.onrender.com/api/breeds')

    const breeds = await res.json()

    const cleanUrl = (name: string) => {
      return name.replace(' ', '-').toLowerCase()
    }
 
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = breeds.map((breed: { id: any, name: string }) => ({
        params: { 
          id: breed.id,
          name: cleanUrl(breed.name)
        },
    }))
    return {
      paths,
      fallback: true, // false or "blocking"
    }
  } 
   
  export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as IParams
    const res = await fetch('https://devchallenges-catwiki.onrender.com/api/breed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id})
    })
    const breed = await res.json()
    return { props: { breed } }
  }
   
  export default function Page({
    breed,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (<h1>{breed?.name}</h1>)
  }