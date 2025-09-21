// Reward.jsx
import styled, { keyframes } from "styled-components"
import { ReactComponent as LeftArrow } from '../Icon/아이콘_헤더-arrow_header.svg' 
import { ReactComponent as Home } from '../Icon/아이콘_헤더-홈_테두리ver..svg' 
import { ReactComponent as Menu } from '../Icon/hamburger 1.svg' 
import { ReactComponent as Img } from '../Icon/이미지_룰렛.svg' 
import { useState } from 'react';
import RewardModal from "../modals/rewardmodal"


const Container = styled.div`
    width: 26.5625rem;
    height: 58.25rem;
    display: flex;
    flex-direction: column;
    background: var(--gray-neutral-50, #FAFAFA);
    padding : 1rem 1.25rem 1rem 1.25rem;
    box-sizing: border-box;
    align-items: center;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const LeftArrowicon = styled(LeftArrow)`
    width: 1.5rem;  
    height: 1.5rem;
`

const HeaderText = styled.h2`
    margin : 0;
    color: #000;
    text-align: center;
    /* Title/Heading 6 */
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
    margin-left: 7rem;
    margin-top: 0.13rem;
`

const HomeIcon = styled(Home)`
    width: 1.75rem; 
    height: 1.75rem;
    margin-left: 4rem;
`

const MenuIcon = styled(Menu)`
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 1rem;
`
const MainText = styled.h2`
    margin : 0;
    color: var(--black, #262626);
    text-align: center;
    width : 100%;
    margin-top: 3.44rem;
    /* Title/Heading 1 */
    font-family: "NHMedium";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 2.275rem */
    letter-spacing: -0.0325rem;
`

const RewardImg = styled(Img)`
    width : 16.5rem;
    height : 17.0625rem;
    margin-top: 1rem;
`

const MaintwoText = styled.h2`
    margin : 0;
    color: var(--black, #262626);
    text-align: center;
    width : 100%;
    margin-top: 0.94rem;
    /* Title/Heading 1 */
    font-family: "NHMedium";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 2.275rem */
    letter-spacing: -0.0325rem;
`

const SubText = styled.h2`
    margin: 0;
    color: var(--black, #262626);
    text-align: center;

    /* Body/Body 3 */
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
`

const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;


const BannerContainer = styled.div`
    width: 100%;
    height: 8.75rem;
    display: flex;
    flex-direction: column;
    margin-top: 2.69rem;
    overflow: hidden; 
    gap: 1rem;
    box-sizing: border-box;
`;

const BannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 200%;
    animation: ${scroll} 20s linear infinite;
    align-items: center;
    white-space: nowrap;
`;

const OneBanner = styled.div`
    width: 20.3125rem;
    height: 3.875rem;
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    border-radius: 3.125rem;
    background: #FFD779;
    color: var(--black, #262626);
    text-align: center;
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.05rem;
    flex-shrink: 0;
    margin-right: 1.5rem;
`;
const OnenotBanner = styled.div`
    width: 20.3125rem;
    height: 3.875rem;
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    border-radius: 3.125rem;
    background: #FFECC0;
    color: var(--gray-neutral-300, #D4D4D4);
    text-align: center;
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.05rem;
    flex-shrink: 0;
    margin-right: 1.5rem;
`;


const TwoBanner = styled.div`
    width: 20.1875rem;
    height: 3.875rem;
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    border-radius: 3.125rem;
    background: #FFD779;
    text-align: center;
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.05rem;
    flex-shrink: 0;
    margin-right: 1.5rem;
`;

const TwonotBanner = styled.div`
    width: 20.1875rem;
    height: 3.875rem;
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    border-radius: 3.125rem;
    background: #FFECC0;
    text-align: center;
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.05rem;
    flex-shrink: 0;
    margin-right: 1.5rem;
    color: var(--gray-neutral-300, #D4D4D4);
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap : 1rem;
    margin-top : 5.16rem;
`

const ShareBtn = styled.div`
    display: flex;
    width: 7.25rem;
    height : 4.375rem;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border: 1px solid var(--gray-neutral-400, #A3A3A3);
    background: var(--white, #FFF);
    font-family: "NHMedium";
    cursor: pointer; // 👈 Add cursor: pointer; for clickability
    color: var(--black, #262626);

    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const NextBtn = styled.div`
    display: flex;
    width: 15.8125rem;
    height : 4.375rem;
    box-sizing: border-box;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.75rem;
    background: var(--Primary-NH-Green, #32A13C);
    font-family: "NHMedium";
    color : #FFF;
    cursor: pointer; // 👈 Add cursor: pointer; for clickability
    color: var(--white, #FFF);
    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--overlay, rgba(18, 18, 18, 0.40));
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export default function Reward() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bannerItems = [
        <OneBanner key="item1">하나로마트 제철 사과 5% 할인 쿠폰</OneBanner>,
        <OnenotBanner key="item2">하나로마트 제철 사과 5% 할인 쿠폰</OnenotBanner>,
        <OneBanner key="item3">근처 전통시장 5천원 장보기 쿠폰</OneBanner>,
        <OnenotBanner key="item4">근처 전통시장 5천원 장보기 쿠폰</OnenotBanner>
    ];

    const bannerItemstwo = [
        <TwonotBanner key="item5">NH올원e적금 0.2% 금리 우대 쿠폰</TwonotBanner>,
        <TwoBanner key="item6">NH올원e적금 0.2% 금리 우대 쿠폰</TwoBanner>,
        <TwonotBanner key="item7">하나로마트 고구마 10% 할인 쿠폰</TwonotBanner>,
        <TwoBanner key="item8">하나로마트 고구마 10% 할인 쿠폰</TwoBanner>
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Container>
            <HeaderContainer>
                <LeftArrowicon />
                <HeaderText>NH 투두리스트</HeaderText>
                <HomeIcon />
                <MenuIcon />
            </HeaderContainer>
            <MainText>오직 NH투두리스트를 <br />사용하는 분께!</MainText>
            <RewardImg />
            <MaintwoText>100% 당첨 올원룰렛</MaintwoText>
            <SubText>소비데이터를 기반으로 한 리워드입니다!</SubText>
            <BannerContainer>
                <BannerWrapper>
                    {[...bannerItems, ...bannerItems]}
                </BannerWrapper>
                <BannerWrapper>
                    {[...bannerItemstwo, ...bannerItemstwo]}
                </BannerWrapper>
            </BannerContainer>
            <BtnContainer>
                <ShareBtn>소비 내역</ShareBtn>
                <NextBtn onClick={openModal}>올원룰렛 돌리기</NextBtn>
            </BtnContainer>

            {isModalOpen && (
                <ModalOverlay>
                    <RewardModal closeModal={closeModal} />
                </ModalOverlay>
            )}
        </Container>
    );
}