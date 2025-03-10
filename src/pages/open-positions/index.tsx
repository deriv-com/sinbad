import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from './hero'
import OpenPositions from './open-positions'
import Layout from 'components/layout/layout'
import { JoinUs } from '../../loadables/home'

const Positions = () => {
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Open Positions</title>
            </Helmet>
            <Hero />
            <OpenPositions />
            <JoinUs appearance="openPositions" />
        </Layout>
    )
}

export default Positions
