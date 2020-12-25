import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../../layout"
import Hero from "../../components/Hero"

const BlogPost = ({ data }) => {
  const {
    title,
    subtitle,
    image,
    image_text,
    category,
    description,
  } = data.post
  return (
    <Layout
      title={title}
      subtitle={subtitle}
      hero={<Hero image={image.childImageSharp.fluid} text={image_text} />}
    >
      <div className="blogPage">
        <div className="blogPage__content">
          <ReactMarkdown source={description}></ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    post: strapiPosts(pretty_url: { eq: $slug }) {
      title
      subtitle
      image {
        childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image_text
      description
      category
    }
  }
`

export default BlogPost