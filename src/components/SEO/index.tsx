import Head from 'next/head'
import { useMemo } from 'react'
import { chainIconUrl, tokenIconUrl } from 'utils'

interface SEOProps {
  cardName?: string
  chain?: string
  token?: string
  tvl?: string
  volumeChange?: string
  logo?: string
  nftPage?: boolean
}

const SEO = ({ cardName, chain, token, tvl, volumeChange, logo, nftPage = false }: SEOProps) => {
  const windowURL = typeof window !== 'undefined' && window.location.href ? window.location.href : ''

  const isTvlValid = tvl && tvl !== '$0'

  const isVolumeChangeValid = volumeChange && volumeChange !== 'NaN%' && volumeChange !== 'undefined%'

  const cardURL = useMemo(() => {
    let cardSrc = new URL(`https://og-cards-chi.vercel.app/`)

    // If text is default, the image will only have the logo in the center, without any tvl numbers, chain or token name etc
    let text: string = cardName ? (cardName === 'All' ? 'Overall' : cardName) : 'default'

    cardSrc.pathname = `${encodeURIComponent(text)}.jpeg`

    cardSrc.searchParams.append('theme', 'dark')

    cardSrc.searchParams.append('valueHeader', nftPage ? 'Total Volume' : 'Total Value Locked')

    isTvlValid && cardSrc.searchParams.append('tvl', tvl)

    isVolumeChangeValid && cardSrc.searchParams.append('volumeChange', volumeChange)

    cardSrc.searchParams.append('footerURL', encodeURIComponent(windowURL))

    // First url in images should always be the logo of defillama
    let images = nftPage
      ? [`https://metafidashboard.ga/defillama-press-kit/nft/SVG/defillama-nft.svg`]
      : [`https://metafidashboard.ga/defillama-press-kit/defi/SVG/defillama.svg`]

    // chain and token props are used to get logo, if the logo url isn't available in the data of that page
    if (logo) {
      images = [...images, logo]
    } else if (chain && chain !== 'All') {
      images = [...images, `https://metafidashboard.ga${chainIconUrl(chain)}`]
    } else {
      if (token && token !== 'All') {
        images = [...images, `https://metafidashboard.ga${tokenIconUrl(token)}`]
      }
    }

    for (let image of images) {
      cardSrc.searchParams.append('images', image)
    }

    return cardSrc.toString()
  }, [cardName, chain, token, tvl, volumeChange, logo, nftPage, windowURL, isTvlValid, isVolumeChangeValid])

  return (
    <Head>
      <meta
        name="description"
        content="MetafiDashboard-Defi dashboard is a DeFi TVL aggregator. It is committed to providing Free ,accurate data without ads or sponsored content, as well as transparency."
      />

      <meta property="og:title" content="MetafiDashboard" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={windowURL} />
      <meta property="og:site_name" content="MetafiDashboard" />
      <meta
        property="og:description"
        content="MetafiDashboard-Defi dashboard is a DeFi TVL aggregator. It is committed to providing Free ,accurate data without ads or sponsored content, as well as transparency."
      />
      <meta property="og:image" content={cardURL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="metafinances.ga" />
      <meta property="twitter:url" content={windowURL} />
      <meta name="twitter:title" content="MetaFinances" />
      <meta name="twitter:site" content="@MetaFinances" />
      <meta name="twitter:creator" content="@MetaFinances" />
      <meta
        name="twitter:description"
        content= "MetafiDashboard-Defi dashboard is a DeFi TVL aggregator. It is committed to providing Free ,accurate data without ads or sponsored content, as well as transparency."
      />
      <meta name="twitter:image" content={cardURL} />
    </Head>
  )
}

export default SEO
