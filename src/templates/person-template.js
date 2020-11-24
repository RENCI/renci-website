import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, HorizontalRule } from '../components/layout'
import { Paragraph } from '../components/typography'
import { ArrowLink } from '../components/link'
import { ArticlePreview } from '../components/news'
import { Profile } from '../components/people'
import { useAvatar } from '../hooks'
import { List } from '../components/list'

export default ({ data, pageContext }) => {
  const {
    peopleYaml: {
      fullName,
      photo,
      title,
      email,
      phone,
      www,
      bio,
      groups,
      collaborations,
      teams,
    }
  } = data
  const avatar = useAvatar()
  const contributions = [].concat(groups || [], collaborations || [], teams || [])
    .sort((a, b) => a.name > b.name)

  return (
    <Container>

      <Profile
        name={ fullName }
        title={ title }
        email={ email }
        phone={ phone }
        www={ www }
        bio={ bio }
        photo={ photo ? photo.childImageSharp.fixed : avatar.childImageSharp.fixed }
      />

      <Section title="Contributions">
        { contributions && <List items={ contributions.map(contribution => <ArrowLink key={ contribution.id } to={ contribution.fields.path } text={ contribution.name } />) } /> }
      </Section>

      <Section title="About">
        <Paragraph>
          { bio }
        </Paragraph>
      </Section>

    </Container>
  )
}

export const personQuery = graphql`
  query($id: String!) {
    peopleYaml( id: { eq: $id }) {
      id
      fullName
      title
      email
      phone
      photo {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      www {
        twitter
        github
        instagram
        linkedin
        youtube
      }
      bio
      teams {
        id
        name
        fields {
          path
        }
      }
      groups {
        id
        name
        fields {
          path
        }
      }
      collaborations {
        id
        name
        fields {
          path
        }
      }
    }
  }
`