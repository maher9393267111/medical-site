import DOMPurify from 'dompurify'
import { JSDOM } from "jsdom";
import styled from 'styled-components'
import { CSSProperties } from 'react'

const InlineSvgPreview = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`

export const InlineSvgPreviewComponent = ({
  value,
  className,
  style,
}: {
  value?: string
  className?: string
  style?: CSSProperties
}) => {
  if (!value) {
    return null
  }

  return (
    <InlineSvgPreview
      dangerouslySetInnerHTML={{ 
        __html:value
        //  __html: DOMPurify.sanitize(value) 
      
      
        // __html: DOMPurify((new JSDOM("<!DOCTYPE html>")).window).sanitize(
        //   value
        // )
    

      
      }}
      className={className}
      style={style}
    />
  )
}