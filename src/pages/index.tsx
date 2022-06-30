import React from 'react'
import { Helmet } from 'react-helmet'
import Carousel from './home/carousel'
import Welcome from './home/welcome'
import { JoinUs, OurTerms, TechStack } from './home'
import Layout from 'components/layout/layout'

const Home = () => {
    console.log({ message: 'RELEASE TRIGGER TEST' })
    return (
        <Layout>
            <Helmet>
                <title>Sinbad | Home</title>
            </Helmet>
            <Carousel />
            <Welcome />
            <OurTerms />
            <TechStack />
            <JoinUs appearance="home" />
        </Layout>
    )
}

export default Home
