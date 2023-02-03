import React from 'react'
import styled from 'styled-components'
import { ContainerWrapper, Flex } from 'components/containers'
import { Card } from 'components/containers/flex'
import {
    Benefits,
    Salary,
    Bonus,
    Insurance,
    House,
    DressCode,
    Contract,
    BlueBackground,
    Location,
} from 'images/common/jd'
import device from 'themes/device'

const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BlueBackground});
    background-repeat: no-repeat;
    background-size: 45% 100%;
    width: 100%;
    height: 100%;
`

const BenefitsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    @media (max-width: 1335px) {
        align-items: center;
    }
`

const StyledHeader = styled.div<{ font_family?: string }>`
    text-transform: uppercase;
    color: var(--color-sand-4);
    padding: 40px 40px 40px 0;
    font-size: 3.8rem;
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: right;
    @media ${device.mobileM} {
        padding: 40px 50px 40px 0;
    }
    @media ${device.mobileS} {
        padding: 40px 15px 40px 0;
    }
`

const BenefitsImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 30px 0;
`

const StyledImg = styled.img`
    padding-right: 50px;

    @media ${device.mobileM} {
        padding-right: 20px;
    }
    @media ${device.mobileS} {
        padding-right: 10px;
    }
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const CardHeader = styled.div<{ font_family?: string }>`
    font-size: 1.9rem;
    line-height: 32px;
    color: var(--color-black-3);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    padding: 25px 10px 0;
`

const LocationContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    @media (max-width: 1335px) {
        justify-content: center;
    }
`

const data = [
    { text: 'Market-based salary', icon: Salary },
    { text: 'Annual performance bonus', icon: Bonus },
    { text: 'Medical insurance', icon: Insurance },
    { text: 'Housing & transportation allowance', icon: House },
    { text: 'Casual dress code', icon: DressCode },
    { text: 'Work permit', icon: Contract },
]

const BenefitsList = () => {
    return (
        <BenefitsContainer>
            <BenefitsContainerWrapper>
                <BenefitsImageContainer>
                    <StyledHeader>Benefits</StyledHeader>
                    <StyledImg src={Benefits} />
                </BenefitsImageContainer>
                <Flex wrap="wrap" jc="center">
                    {data.map(({ icon, text }, index) => {
                        return (
                            <Card
                                key={index}
                                ai="center"
                                fd="column"
                                jc="center"
                                max_width="370px"
                                height="280px"
                                padding="55px 0"
                                margin="15px"
                                border_radius="5px"
                            >
                                <img src={icon} />
                                <CardInfo>
                                    <CardHeader>{text}</CardHeader>
                                </CardInfo>
                            </Card>
                        )
                    })}
                </Flex>
                <LocationContainer>
                    <Card
                        ai="center"
                        fd="column"
                        jc="center"
                        max_width="370px"
                        height="280px"
                        padding="55px 0"
                        margin="15px"
                        border_radius="5px"
                    >
                        <img src={Location} />
                        <CardInfo>
                            <CardHeader>Dubai, the UAE</CardHeader>
                        </CardInfo>
                    </Card>
                </LocationContainer>
            </BenefitsContainerWrapper>
        </BenefitsContainer>
    )
}

export default BenefitsList
