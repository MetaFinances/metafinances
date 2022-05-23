import React from 'react'
import { useRouter } from 'next/router'
import { TrendingUp, HelpCircle, Link as LinkLogo, CloudDrizzle, Minimize2, Clock, Bookmark, RefreshCcw, Code, Shield, Share2, Map, List, Percent, Book, Home, Cpu, Copy, Gift, Box, GitPullRequest, Hexagon, Grid, Terminal, Link2, Heart, BarChart, Users  } from 'react-feather'

import { Entry } from './shared'
import { AutoColumn } from '../Column'

const NavMenu = ({ isMobile }) => {
  const router = useRouter()
  const history = { location: { pathname: router.pathname } }

  return (
    <AutoColumn gap="1.25rem">
      {isMobile && <Entry url="yields" name="Yields" history={history} Icon={Percent} style={{ marginTop: '20px' }} />}
      <Entry url="" name="Dashboard" history={history} Icon={BarChart} />
      {!isMobile && <Entry url="portfolio" name="Portfolio" history={history} Icon={Bookmark} />}
      <Entry url="https://metafidashboard.ga/nfts" name="NFTs" history={history} Icon={Copy} external />
      <Entry url="chains" name="Chains" history={history} Icon={Cpu} />
      <Entry url="categories" name="Categories" history={history} Icon={Grid} />
      <Entry url="top-protocols" name="Top Protocols" history={history} Icon={Hexagon} />
      <Entry url="oracles" name="Oracles" history={history} Icon={Box} />
      <Entry url="forks" name="Forks" history={history} Icon={GitPullRequest} />
      <Entry url="comparison" name="Comparison" history={history} Icon={Minimize2} />
      <Entry url="airdrops" name="Airdrops" history={history} Icon={Gift} />
      <Entry url="languages" name="Languages" history={history} Icon={Terminal} />
      <Entry url="recent" name="Listings" history={history} Icon={Clock} />
      <Entry url="https://etherscan.io/address/0x51B9063BCF4757a765F36245D98E2f5050a2f3bA" name="Donate" history={history} Icon={Heart} external />
      <Entry url="https://linktr.ee/metavecto" name="Socials" history={history} Icon={Link2} external />
      <Entry url="about" name="About" history={history} Icon={HelpCircle} />
      <Entry url="press" name="Press" history={history} Icon={Users} />
    </AutoColumn>
  )
}

export default NavMenu
