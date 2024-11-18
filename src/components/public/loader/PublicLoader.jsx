
import PageLoader from './PageLoader'

const PublicLoader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="mr-48">
            <PageLoader />
          </div>
        </div>
  )
}

export default PublicLoader