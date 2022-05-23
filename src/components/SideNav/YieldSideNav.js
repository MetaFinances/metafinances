import React from 'react'
import { TrendingUp, BarChart2, PlusCircle, List, BarChart, Heart, Link2 } from 'react-feather'

import { Entry } from './shared'
import { AutoColumn } from '../Column'
import { useRouter } from 'next/router'

const NavMenu = ({ isMobile }) => {
  const router = useRouter()
  const history = { location: { pathname: router.pathname } }

  return (
    <AutoColumn gap="1.25rem" style={{ paddingBottom: '1rem', marginBottom: 'auto' }}>
      {isMobile && <Entry url="" name="DeFi" history={history} Icon={BarChart2} style={{ marginTop: '20px' }} />}
      <Entry url="yields" name="Dashboard" history={history} Icon={BarChart} />
      <Entry url="yields/projects" name="Projects" history={history} Icon={List} />
      <Entry url="https://metafidashboard.ga/nfts" name="NFTs" history={history} Icon={Copy} external />
      <Entry url="https://etherscan.io/address/0x51B9063BCF4757a765F36245D98E2f5050a2f3bA" name="Donate" history={history} Icon={Heart} external />
      <Entry url="https://linktr.ee/metavecto" name="Socials" history={history} Icon={Link2} external />
    </AutoColumn>
  )
}

export default NavMenu
