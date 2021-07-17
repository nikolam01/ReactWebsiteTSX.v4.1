import React from 'react'
import DocViewer from '../components/DocViewer/DocViewer'

//components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const CV: React.FC = () => {
  return (
    <div className="CV">
      <Navbar />
      <DocViewer source="https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc" />
      <Footer />
    </div>
  )
}
export default CV
