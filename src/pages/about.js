import React from 'react'

import { TYPE } from '../Theme'
import Panel from '../components/Panel'
import { PageWrapper, FullWrapper } from '../components'
import { RowBetween } from '../components/Row'
import styled from 'styled-components'
import { Divider } from '../components'
import Link from '../components/Link'
import { GeneralLayout } from '../layout'

function AboutPage() {
  const DashGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-areas: 'account';
    padding: 0 4px;

    > * {
      justify-content: flex-end;
    }
  `

  return (
    <GeneralLayout title="MetafiDashboard - DeFi Dashboard" defaultSEO>
      <PageWrapper>
        <FullWrapper>
          <RowBetween>
            <TYPE.largeHeader>About</TYPE.largeHeader>
          </RowBetween>
          <Panel style={{ marginTop: '6px' }}>
            <DashGrid center={true} style={{ height: 'fit-content', padding: '0 0 1rem 0' }}>
              <TYPE.main area="account">Mission</TYPE.main>
              <Divider />

              <TYPE.main>
                MetafiDashboard-Defi dashboard is the largest TVL aggregator for Defi (Decentralized Finance). Our Analytics data is 99.9% accurate which is
                 built and maintained by the community, for the community.
              </TYPE.main>
              <TYPE.main>Our focus is on free, accurate data and transparent methodology.</TYPE.main>
              <TYPE.main>We track over 659 DeFi protocols from over 70 different blockchains.</TYPE.main>
              <Divider />
              <Divider />
              <TYPE.main>
                Contact us on <Link href="https://twitter.com/MetaFinances">Twitter</Link> or{' '}
                <Link href="https://discord.io/MetaVectors">Discord</Link>
              </TYPE.main>
            </DashGrid>
          </Panel>
          <Panel style={{ marginTop: '6px' }}>
            <DashGrid center={true} style={{ height: 'fit-content', padding: '0 0 1rem 0' }}>
              <TYPE.main area="account">Acknowledgements</TYPE.main>
              <Divider />
              <TYPE.main>
                Thanks to <Link href="https://www.coingecko.com/">CoinGecko</Link>
              </TYPE.main>
              <Divider />
              <TYPE.main>
                MetafiDashboard's design is based on <Link href="https://www.defillama.com/">DefiLlama-app</Link>
              </TYPE.main>
            </DashGrid>
          </Panel>
        </FullWrapper>
      </PageWrapper>
    </GeneralLayout>
  )
}

export default AboutPage
