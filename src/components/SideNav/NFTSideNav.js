import React from 'react'
import { TrendingUp, HelpCircle, Link as LinkLogo, ShoppingCart, BarChart2, Cpu, BarChart, Heart, Link2 } from 'react-feather'

import { Entry } from './shared'
import { AutoColumn } from '../Column'
import { useRouter } from 'next/router'

const NavMenu = ({ isMobile }) => {
  const router = useRouter()
  const history = { location: { pathname: router.pathname } }

  return (
    <AutoColumn gap="1.25rem" style={{ paddingBottom: '1rem', marginBottom: 'auto' }}>
      {isMobile && <Entry url="" name="DeFi" history={history} Icon={BarChart2} style={{ marginTop: '20px' }} />}
      <Entry url="nfts" name="Dashboard" history={history} Icon={BarChart} />
      <Entry url="nfts/chains" name="Chains" history={history} Icon={Cpu} />
      <Entry url="nfts/marketplaces" name="Marketplaces" history={history} Icon={ShoppingCart} />
      <Entry url="https://etherscan.io/address/0x51B9063BCF4757a765F36245D98E2f5050a2f3bA" name="Donate" history={history} Icon={Heart} external />
      <Entry url="https://linktr.ee/metavecto" name="Socials" history={history} Icon={Link2} external />
      <Entry url="nfts/about" name="About" history={history} Icon={HelpCircle} />
    </AutoColumn>
  )
}

export default NavMenu
