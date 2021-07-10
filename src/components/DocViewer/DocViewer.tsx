import React from 'react'

interface Props {
  source: string
}

const DocViewer: React.FC<Props> = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>
  }

  const src = source
  return (
    <div className="DocCiewer">
      <iframe
        src={'https://docs.google.com/viewer?url=' + src + '&embedded=true'}
        title="file"
        width="100%"
        height="600"
      ></iframe>
    </div>
  )
}

export default DocViewer
