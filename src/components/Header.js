import React from 'react'
import PropTypes from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { LinkComponent, BreakpointHeader } from './common/Headers'

const Header = props => {
  const breakpoints = useBreakpoint()
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="content">
        <div className="inner">
          <h1>国際平和の日コンサート</h1>
          <h2 >～ 世界をつなぐ24時間コンサートリレー ～</h2>
          <BreakpointHeader breakpoints={breakpoints} content="2023.9.18(Mon.) 14:00- (open 13:30)" />
          <BreakpointHeader breakpoints={breakpoints} content="八王子市芸術文化会館 いちょうホール" isLarge={true} />

          <h3>
            指揮{' '}
            <LinkComponent
              className="use-title-conductor"
              onOpenArticle={() => props.onOpenArticle('wagner')}
              children="Dieter Wagner"
              style={{marginRight: '1.9em'}}
            />
            <br />
            合唱{' '}
            <LinkComponent
              className="use-title-choir"
              onOpenArticle={() => props.onOpenArticle('balss')}
              children="BALSS"
            />
            /
            <LinkComponent
              className="use-title-choir"
              onOpenArticle={() => props.onOpenArticle('nova')}
              children="CancaoNova"
            />
            /
            <LinkComponent
              className="use-title-choir"
              onOpenArticle={() => props.onOpenArticle('tbyc')}
              children="TBYC"
            />
          </h3>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <LinkComponent className="use-border" onOpenArticle={() => props.onOpenArticle('concept')} children="CONCEPT" />
          </li>
          <li>
            <LinkComponent className="use-border" onOpenArticle={() => props.onOpenArticle('explanation')} children="Stage" />
          </li>
          <li>
            <LinkComponent className="use-border" onOpenArticle={() => props.onOpenArticle('access')} children="Access" />
          </li>
          <li>
            <LinkComponent className="use-border" onOpenArticle={() => props.onOpenArticle('ticket')} children="Ticket" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
