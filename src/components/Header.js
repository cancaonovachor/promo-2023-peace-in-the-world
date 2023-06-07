import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const Header = props => {
  const breakpoints = useBreakpoint()
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {/* <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div> */}
      <div className="content">
        <div className="inner">
          {/* {breakpoints.md ? (
            <h1>
              <a
                className="use-title-nova"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('nova')
                }}
              >
                CancaoNova
              </a>{' '}
              ×{' '}
              <a
                className="use-title-ol"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('ol')
                }}
              >
                Ohta Laboratory
              </a>
            </h1>
          ) : (
            <h1>
              <a
                className="use-title-nova"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('nova')
                }}
              >
                CancaoNova
              </a>
              <br />×<br />
              <a
                className="use-title-ol"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('ol')
                }}
              >
                Ohta Laboratory
              </a>
            </h1>
          )} */}

          
          <h1>国際平和の日コンサート</h1>
          <h2 >～ 世界をつなぐ24時間コンサートリレー ～</h2>
          {/* <h2 >~ in 24 hours around the world ~</h2> */}
          {breakpoints.md ? (
            <h2>2023.9.18(Mon.) 14:00- (open 13:30)</h2>
          ) : (
            <h3>2023.9.18(Mon.) 14:00- (open 13:30)</h3>
          )}

          {breakpoints.md ? (
            <h2>八王子市芸術文化会館 いちょうホール</h2>
          ) : (
            <h2>
              八王子市芸術文化会館
              <br /> いちょうホール
            </h2>
          )}
          <h3>
            指揮{' '}
            <a
              className="use-title-conductor"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('wagner')
              }}
              style={{marginRight: '1.9em'}}
            >
              ディーター・ワーグナー
            </a>
            <br />
            合唱{' '}
            <a
              className="use-title-choir"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('balss')
              }}
            >
              BALSS
            </a>
            /
            <a
              className="use-title-choir"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('nova')
              }}
            >
              CancaoNova
            </a>
            /
            <a
              className="use-title-choir"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('tbyc')
              }}
            >
              {/* Tokyo Bay Youth Choir */}
              TBYC
            </a>
          </h3>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('concept')
              }}
            >
              CONCEPT
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('explanation')
              }}
            >
              Stage
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('access')
              }}
            >
              Access
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="https://passmarket.yahoo.co.jp/event/show/detail/02q449iuf2621.html"
              target="_blank"
            >
              Ticket <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
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
