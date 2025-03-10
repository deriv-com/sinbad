import * as React from 'react'
import { Helmet } from 'react-helmet'
import type { PageProps } from 'gatsby'
import Description from '../pages/job-description/description'
import JobTitle from '../pages/job-description/job-title'
import BenefitsList from '../pages/job-description/benefits'
import Positions from 'data/positions.json'
import Layout from 'components/layout/layout'
import { JoinUs } from '../loadables/home'

const JobDescription = (props: PageProps) => {
    const position = Positions?.find(({ id }) => id === props.pageContext.slug)

    return (
        <Layout>
            <Helmet>
                <title>Sinbad | {position?.position}</title>
            </Helmet>
            <JobTitle position={position} />
            <Description position={position} />
            <BenefitsList />
            <JoinUs appearance="job" />
        </Layout>
    )
}

export default JobDescription
