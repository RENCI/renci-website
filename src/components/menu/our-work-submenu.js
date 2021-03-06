import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Heading } from '../../components/typography'
import { useCollaborations, useGroups, useTeams } from '../../hooks'
import { ArrowLink, Link } from '../link'
import { Button } from '../buttons'
import { animated, useSprings } from 'react-spring'

const NavColumn = styled(animated.div)`
  padding: 1rem;
  & ul {
    list-style-type: none;
    margin: 0;
    & > li {
      padding: 0;
      margin: 5px 0;
    }
  }
  & ${ Heading } {
    font-size: 150%;
  }
`

const AllProjectsLink = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  font-size: 80%;
`

export const OurWorkSubmenu = ({ onLinkClick }) => {
  const groups = useGroups()
  const collaborations = useCollaborations()
  const teams = useTeams()

  const columns = [
    <Fragment>
      <Heading><Link to="/our-work/groups">Research Groups</Link></Heading>
      <ul>
        {
          groups.map((group, i) => (
            <li onClick={ onLinkClick } key={ group.id }>
              <ArrowLink to={ group.fields.path } text={ group.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
    <Fragment>
      <Heading><Link to="/our-work/collaborations">Collaborations</Link></Heading>
      <ul>
        {
          collaborations.map((collaboration, i) => (
            <li onClick={ onLinkClick } key={ collaboration.id }>
              <ArrowLink to={ collaboration.fields.path } text={ collaboration.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
    <Fragment>
      <Heading><Link to="/our-work/operations">Operations</Link></Heading>
      <ul>
        {
          teams.map((team, i) => (
            <li onClick={ onLinkClick } key={ team.id }>
              <ArrowLink to={ team.fields.path } text={ team.name } />
            </li>
          ))
        }
      </ul>
    </Fragment>,
  ]

  const springs = useSprings(
    columns.length,
    columns.map((item, i) => ({
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      delay: i * 75,
    }))
  )

  return (
    <Fragment>
      <Grid fluid component="nav" style={{ position: 'relative' }}>
        <Row>
          { springs.map((styles, i) => <NavColumn xs={ 12 } md={ 4 } style={{ ...styles, flex: 1 }}>{ columns[i] }</NavColumn>) }
        </Row>
      </Grid>
      <AllProjectsLink>
        <ArrowLink float="right" text="View All Projects" to="/projects" />
      </AllProjectsLink>
    </Fragment>
  )
}

OurWorkSubmenu.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
}

OurWorkSubmenu.defaultProps = {
  onLinkClick: () => {},
}
