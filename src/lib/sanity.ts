import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: 'u1lo88cu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // published, cached content — fine for a public site
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}