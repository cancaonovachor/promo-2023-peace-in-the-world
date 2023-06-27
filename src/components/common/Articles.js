// Article.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Article = ({ id, article, articleTimeout, title, children, image, twitterUrl, facebookUrl, youtubeUrl }) => {
  let major = "major"
  if (twitterUrl || facebookUrl || youtubeUrl) {
    major = ""
  }
  return (
    <article
      id={id}
      className={`${article === id ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
      style={{ display: 'none' }}
    >
      <h2 className={major}>
        {title}
        <span style={{ marginLeft: '25px' }} />
        {twitterUrl && (
          <a
            href={twitterUrl}
            style={{ marginRight: '13px'}}
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          )
        }
        {facebookUrl && (
          <a
            href={facebookUrl}
            style={{ marginRight: '13px'}}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          )
        }
        {youtubeUrl && (
          <a
            href={youtubeUrl}
            style={{ marginRight: '13px'}}
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          )
        }
        </h2>
      {image && (
        <span className="image-main main">
          <img src={image} alt="" />
        </span>
      )}
      {children}
    </article>
  )
};

export default Article;