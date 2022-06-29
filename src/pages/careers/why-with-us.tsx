import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ContainerWrapper, ImageContainer } from 'components/containers'
import device from 'themes/device'

const WorkWithUsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-white);

    @media ${device.mobileL} {
        background-image: none;
    }
`
const CareersContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        align-items: center;
    }
`
const WhyWithUsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`
const StyledHeader = styled.h2<{ font_family?: string }>`
    font-size: 4.8rem;
    line-height: 50px;
    color: #1b1b1b;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 20px;

    @media ${device.tabletL} {
        font-size: 3.8rem;
    }
    @media ${device.tabletS} {
        font-size: 3.2rem;
    }
`
const StyledText = styled.div<{ font_family?: string }>`
    max-width: 940px;
    width: 100%;
    font-size: 1.8rem;
    line-height: 34px;
    color: #4c4c4c;
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: center;

    @media ${device.tabletL} {
        font-size: 2.2rem;
    }
    @media ${device.tabletS} {
        font-size: 2.4rem;
    }
`
const StyledImage = styled(ImageContainer)`
    width: 700px;
    height: 600px;
    max-height: unset;

    @media ${device.tabletL} {
        width: 520px;
        height: 500px;
    }
    @media ${device.tabletS} {
        width: 400px;
        height: 350px;
    }
    @media ${device.mobileL} {
        width: 300px;
        height: 250px;
    }
`

const WorkWithUs = () => {
    return (
        <WorkWithUsContainer>
            <CareersContainerWrapper>
                <WhyWithUsText>
                    <StyledHeader>Why work at sinbad software?</StyledHeader>
                    <StyledText>
                        Fintech is an industry where projects come in many shapes and sizes. You’ll
                        be constantly challenged to come up with new solutions and work with various
                        technologies. With us, you’ll have the opportunity to continuously learn and
                        build your skills while working on new challenges with a smart, supportive
                        team.
                    </StyledText>
                </WhyWithUsText>
                <StyledImage>
                    <StaticImage
                        src="../../images/common/careers/words.png"
                        alt="Variety of programming languages, challenges, and support"
                        placeholder="tracedSVG"
                        loading="eager"
                    />
                </StyledImage>
            </CareersContainerWrapper>
        </WorkWithUsContainer>
    )
}

export default WorkWithUs
