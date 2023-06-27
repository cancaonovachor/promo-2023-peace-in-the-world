import React from 'react'


export const LinkComponent = ({className, onOpenArticle, children}) => (
  <a
    className={className}
    href="javascript:;"
    onClick={onOpenArticle}
  >
    {children}
  </a>
)

export const BreakpointHeader = ({breakpoints, content, isLarge = false}) => (
  breakpoints.md ? (
    <h2>{content}</h2>
  ) : (
    isLarge ? <h2>{content}</h2> : <h3>{content}</h3>
  )
)