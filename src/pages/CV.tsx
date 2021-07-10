import React from 'react'
import DocViewer from '../components/DocViewer/DocViewer'

//components
import Navbar from '../components/Navbar/Navbar'

const CV: React.FC = () => {
  return (
    <div className="CV">
      <Navbar />
      <DocViewer source="https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc" />
    </div>
  )
}
export default CV
