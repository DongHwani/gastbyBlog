/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "./layout"
import Listing from "./listing"
import usePosts from "../hooks/use-post"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const p = usePosts()

  return (
    <Layout>
    <Listing posts={p.nodes} showTags={true} />
 
  </Layout>
  )
}

export default Homepage
