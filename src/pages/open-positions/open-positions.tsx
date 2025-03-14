import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Text } from 'components/containers/main'
import { ContainerWrapper } from 'components/containers/common/style'
import Flex, { Card, CardButton, LinkContainer } from 'components/containers/flex'
import device from 'themes/device'
import { positions } from 'data/job-description-data'
import { BlueBackground } from 'images/common/jd'

type StyledProps = {
    font_family?: string
    border_bottom?: string
    color?: string
    text_align?: string
    line_height?: string
    font_size?: string
    padding?: string
    text_transform?: string
}

/* stylelint-disable */

const OpenPositionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 50% 100%;
    width: 100%;
    height: 100%;
`

const OpenPositionsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

const PositionsCarouselContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    align-items: center;

    @media ${device.tablet} {
        padding: 60px 0;
    }
    @media ${device.mobileL} {
        width: 100%;
        max-width: 300px;
        padding-right: 35px;
        padding-top: 0px;
    }
`

const StyledHeader = styled.div<StyledProps>`
    font-size: ${(props) => props.font_size || '2.9rem'};
    line-height: ${(props) => props.line_height || '34px'};
    color: ${(props) => props.color || 'var(--color-black-3)'};
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    border-bottom: ${(props) => props.border_bottom || 'unset'};
    padding: ${(props) => props.padding || '10px 0 20px'};
    text-transform: ${(props) => props.text_transform || 'unset'};
    text-align: ${(props) => props.text_align || 'center'};

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 4.4rem;
        line-height: 48px;
    }
`

const StyledText = styled.div<StyledProps>`
    font-size: 1.5rem;
    line-height: 24px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: ${(props) => props.text_align || 'left'};
    padding-bottom: 10px;

    @media ${device.laptopM} {
        max-width: 320px;
        font-size: 1.5rem;
        line-height: 25px;
    }
`

const OpenPositions = () => {
    return (
        <OpenPositionsContainer>
            <OpenPositionsContainerWrapper>
                <PositionsCarouselContainer>
                    {positions.map(({ role_plural, text, id }, index) => {
                        return (
                            <Card
                                key={index}
                                fd="column"
                                ai="center"
                                jc="space-between"
                                max_width=" 340px"
                                height="350px"
                                padding="30px"
                                margin="20px"
                            >
                                <StyledHeader color="var(--color-sand-4)" padding="20px 0px">
                                    {role_plural}
                                </StyledHeader>
                                <StyledText font_size="14px" text_align="center">
                                    {text}
                                </StyledText>
                                <LinkContainer to={`/job-description/${id}`}>
                                    <Text
                                        font_size="1.75rem"
                                        text_align="center"
                                        width="50px"
                                        padding="0px"
                                        font_family="Maven Pro Bold"
                                    >
                                        More
                                    </Text>
                                    <CardButton>
                                        <StaticImage
                                            src="../../images/common/openpositions/arrow.png"
                                            alt="arrow"
                                            width={10}
                                            height={10}
                                            loading="eager"
                                            placeholder="none"
                                        />
                                    </CardButton>
                                </LinkContainer>
                            </Card>
                        )
                    })}
                </PositionsCarouselContainer>
            </OpenPositionsContainerWrapper>
        </OpenPositionsContainer>
    )
}

export default OpenPositions
