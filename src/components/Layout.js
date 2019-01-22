import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import blah from '../pages/index.module.scss'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h4
          style={{
            ...scale(0.2),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {/* <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          > */}
          {title}
          {/* </Link> */}
        </h4>
      )
    } else {
      header = (
        <h3
          className="header-title-heavy"
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div style={{ width: '100%' }}>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald:200,700"
          rel="stylesheet"
        />
        <div
          className={blah.navContainer}
          style={{
            color: '#fff',
            height: '120px',
            margin: 'auto 0',
            display: 'flex',
            'align-items': 'center',
          }}
        >
          <nav style={{ 'text-align': 'center', width: '100%' }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <span className={blah.headertitleheavy}>Inflammatory</span>
            <span className={blah.headertitlelight}>Dev</span>
            </Link>

            <div>
              <a href="" className={blah.categories}>
                Latest
              </a>{' '}
              |{' '}
              <a href="" className={blah.categories}>
                Javascript
              </a>{' '}
              |{' '}
              <a href="" className={blah.categories}>
                React
              </a>{' '}
              |{' '}
              <a href="" className={blah.categories}>
                CSS
              </a>{' '}
              |{' '}
              <a href="" className={blah.categories}>
                GraphQL
              </a>
            </div>
          </nav>
        </div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          <footer>
            &copy; {new Date().getFullYear()}, Built on everyones favourite
            1930's book about the Roaring 30's (hmmm, it was the Jazz Age anyway
            for those who understand good literature)
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
