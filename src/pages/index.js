import ChainPage from '../components/ChainPage'
import { GeneralLayout } from '../layout'
import { getChainPageData, revalidate } from '../utils/dataApi'
import SearchDataProvider from 'contexts/SearchData'

export async function getStaticProps() {
  const data = await getChainPageData()
  return {
    ...data,
    revalidate: revalidate(),
  }
}

export default function HomePage(props) {
  return (
    <SearchDataProvider protocolsAndChains={{ protocolNames: props.filteredProtocols, chainsSet: props.chainsSet }}>
      <GeneralLayout title="MetafiDashboard - Defi dashboard">
        <ChainPage {...props} />
      </GeneralLayout>
    </SearchDataProvider>
  )
}
