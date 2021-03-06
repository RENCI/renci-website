import React, { Fragment } from "react"
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { ArrowLink, Link } from '../components/link'
import { Container, Section } from '../components/layout'
import { Paragraph } from '../components/typography'
import { useNews } from '../hooks'
import { NewsList, NewsSpotlightList } from '../components/news'
import { ProjectSpotlight } from '../components/projects'
import HomeGraphic from '../images/home-graphic.svg'
import { Icon } from '../components/icon'

const LearnMoreLink = styled(Link)(({ theme }) => `
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  background-color: ${ theme.color.lightgrey };
  color: ${ theme.color.dark };
  padding: ${ theme.spacing.extraSmall } ${ theme.spacing.small };
  border-radius: ${ theme.border.radius };
  font-size: 75%;
  filter: opacity(0.25);
  transition: filter 250ms;
  display: inline-flex;
  flex-direction: row;
  gap: ${ theme.spacing.small };
  align-items: center;
  text-decoration: none;
`)

const VizWrapper = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  backgroundColor: transparent;
  position: relative;
  height: 300px;
  @media (min-width: 992px) {
    height: 600px;
  }
  &:hover ${ LearnMoreLink } {
    filter: opacity(0.75);
  }
  & img.header-viz {
    margin-left: 12rem;
    margin-bottom: -10rem;
    height: 400px;
    transform: scale(1.2);
    @media (min-width: 992px) {
      transform-origin: 0% 50%;
      height: 750px;
      margin-left: 15rem;
      margin-bottom: -10rem;
    }
  }
`)

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 250px;
  background-color: #ffffffaa;
`

const Tagline = styled.div(({ theme }) => `
  position: absolute;
    left: ${ theme.spacing.large };
  @media (min-width: 1240px) {
  left: ${ theme.spacing.medium };
  }
  right: 0;
  top: 5rem;
  font-size: 300%;
  line-height: 1.5;
  font-weight: 100;
  color: #222;
  max-width: 1220px;
  margin: auto;
`)

const Visualization = () => {
  return (
    <VizWrapper>
      <img className="header-viz" src={ HomeGraphic } alt="" />
      <Overlay />
      <LearnMoreLink to="/home-viz"><Icon icon="question" size={ 16 } /> <span>Explore this graphic</span></LearnMoreLink>
      <Tagline>
        We do<br />
        Data Science
      </Tagline>
    </VizWrapper>
  )  
}

const IndexPage = () => {
  const { latest } = useNews()

  return (
    <Fragment>
      <SEO title="Home" />

      <Visualization />

      <Container>
        <Section title="News Spotlight" fullWidth>
          { latest && <NewsList articles={ latest } /> }
          <br/>
          <Paragraph center>
            <ArrowLink text="See all news" to="/news" />
          </Paragraph>
        </Section>

        <Section title="Project Spotlight" fullWidth>
          <ProjectSpotlight />
        </Section>
      </Container>
    </Fragment>
  )
}

export default IndexPage
