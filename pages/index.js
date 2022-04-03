import { Typography } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="The E-commerce website for your Next purchase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">Next Shop</Typography>
    </div>
  )
}
