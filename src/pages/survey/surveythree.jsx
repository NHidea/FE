import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components"
import { ReactComponent as LeftArrow } from '../../Icon/아이콘_헤더-arrow_header.svg' 
import { ReactComponent as Home } from '../../Icon/아이콘_헤더-홈_테두리ver..svg' 
import { ReactComponent as Menu } from '../../Icon/hamburger 1.svg' 
import { ReactComponent as CHthree } from '../../Icon/이미지-설문3캐릭터.svg' 
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

const Container = styled.div`
    width: 26.5625rem;
    height: 58.25rem;
    display: flex;
    flex-direction: column;
    background: var(--gray-neutral-50, #FAFAFA);
    padding : 1rem 1.25rem 1rem 1.25rem;
    box-sizing: border-box;
    align-items: flex-start;
    position: relative; 
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
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
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

const TextContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top:2.5rem;
`

const MainText = styled.h2`
    color: var(--black, #262626);
    text-align: center;
    font-family: "NHBold";
    margin : 0;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; 
    letter-spacing: -0.0375rem;
`
const ContentContainer = styled.div`
    width : 100%;
    height : 17.62rem;
    display : flex;
    flex-direction: column;
    gap : 1rem;
    box-sizing: border-box;
    margin-top: 2.5rem;
`

const BtnContainer = styled.div`
    width: 100%;
    height : 8.31rem;
    display: flex;
    flex-direction: row;
    gap : 1rem;
    box-sizing: border-box;
`

const BtnBox = styled.div`
    display: flex;
    width: 11.5625rem;
    height: 8.3125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    
    border: 2px solid var(--gray-neutral-200, #E6E6E6);
    background: var(--white, #FFF);
    
    ${props => props.isActive && `
        border: 2px solid var(--Primary-NH-Green, #32A13C);
        background: var(--Secondary-green, #FAFFF9);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    `}
`;

const BtnText = styled.h2`
    margin : 0;
    color: var(--black, #262626);
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.01125rem;
`;

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
    width: 15.825rem;
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
    width: 15.825rem;
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
    width: 14.25rem;
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
    width: 14.25rem;
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


const ChIcon = styled(CHthree)`
    width: 23.66681rem;
    height: 23.972rem;
    flex-shrink: 0;
    position: absolute;
    bottom: 0;
    right: 0;
`;

const TotalBtn = styled.div`
    display: flex;
    width: 24.0625rem;
    height : 4.375rem;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    border-radius: 0.75rem;
    background: var(--Primary-NH-Green, #32A13C);
    color: var(--white, #FFF);
    margin-top : 7rem;
    z-index: 2;

    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    letter-spacing: -0.05rem;
`

const Icon = styled.h2`
    margin : 0;
    color: var(--black, #262626);

    /* Title/Heading 0 */
    font-family: "NHMedium";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.8125rem */
    letter-spacing: -0.0375rem;
`

export default function SurveyThree(){
    const [activeBtn, setActiveBtn] = useState(null); 
    const navigate = useNavigate()
    const handleBtnClick = (index) => {
        setActiveBtn(index); 
    };

    const bannerItems = [
      <OneBanner key="item1">4개의 문항에 답해주세요!</OneBanner>,
      <OnenotBanner key="item2">4개의 문항에 답해주세요!</OnenotBanner>,
    ];

    const bannerItemstwo = [
      <TwonotBanner key="item3">적금? 이게 중요하지!</TwonotBanner>,
      <TwoBanner key="item4">적금? 이게 중요하지!</TwoBanner>,
    ];

    const btnContents = [
        { icon: '💵'},
        { icon: '🔁' },
        { icon: '🎟️'},
        { icon: '🎯'}
    ];

    const handleNext = () => {
        PostQData();
        navigate("/surveyfour")
    }     

    const [data, setData] = useState(null);
    const [Qdata, setQdata] = useState(null);
    const [loading, setLoading] = useState(true);


        const Back = () => {
        navigate("/surveytwo");
    }

  useEffect(() => {
    // axiosInstance를 사용하여 GET 요청 보내기
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/mbti/questions'); // baseURL 뒤에 붙을 경로만 작성
        setData(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // axiosInstance를 사용하여 GET 요청 보내기
    const fetchQData = async () => {
      try {
        const response = await axiosInstance.get('/api/mbti/questions/3/options'); // baseURL 뒤에 붙을 경로만 작성
        setQdata(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('질문 API 호출 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQData();
  }, []);

const PostQData = async () => {
    // activeBtn이 null이 아닐 때만 API 호출
    if (activeBtn === null) {
        console.error('버튼을 선택해주세요.');
        return;
    }

    const selectedOption = Qdata[activeBtn];

    const body = {
        userId: 1, // 유저 ID는 고정 값 또는 로그인 상태에 따라 달라질 수 있습니다.
        questionId: 3, // 현재 설문 문항 ID는 1로 고정
        optionId: selectedOption.optionId, // 선택된 버튼의 optionId 사용
        optionCode: selectedOption.optionCode // 선택된 버튼의 optionCode 사용
    };

    try {
        const response = await axiosInstance.post(
            '/api/mbti/answers',
            body
        );
        console.log('API 호출 성공:', response.data);
        // 다음 페이지로 이동 등 성공 시 로직 추가
    } catch (error) {
        console.error('질문 API 호출 중 오류 발생:', error);
    } finally {
        // API 호출 완료 후 로딩 상태 변경 또는 기타 정리 작업
    }
};

    return(
        <Container>
            <HeaderContainer>
                <LeftArrowicon onClick = {Back}/>
                <HeaderText>NH 투두리스트</HeaderText>
                <HomeIcon/>
                <MenuIcon/>
            </HeaderContainer>
            {data ? (
                                <TextContainer>
                                    <MainText
                                        dangerouslySetInnerHTML={{
                                            __html: (data?.[2]?.title || "").replace(/\\n/g, "<br/>"),
                                        }}
                                    />
                                </TextContainer>
                            ) : (<div/>
                            )}
            <ContentContainer>
            <BtnContainer>
                {btnContents.slice(0, 2).map((item, index) => (
                <BtnBox
                    key={Qdata?.[index]?.optionId || index}
                    onClick={() => handleBtnClick(index)}
                    isActive={activeBtn === index}
                >
                    <Icon>{item.icon}</Icon>
                    <BtnText
                    dangerouslySetInnerHTML={{
                        __html: (Qdata?.[index]?.optionText || "").replace(/\\n/g, "<br/>"),
                    }}
                    />
                </BtnBox>
                ))}
            </BtnContainer>

            <BtnContainer>
                {btnContents.slice(2, 4).map((item, index) => (
                <BtnBox
                    key={Qdata?.[index + 2]?.optionId || index + 2}
                    onClick={() => handleBtnClick(index + 2)}
                    isActive={activeBtn === index + 2}
                >
                    <Icon>{item.icon}</Icon>
                    <BtnText
                    dangerouslySetInnerHTML={{
                        __html: (Qdata?.[index + 2]?.optionText || "").replace(/\\n/g, "<br/>"),
                    }}
                    />
                </BtnBox>
                ))}
            </BtnContainer>
            </ContentContainer>
            <BannerContainer>
                <BannerWrapper>
                    {bannerItems}
                    {bannerItems}
                </BannerWrapper>
                <BannerWrapper>
                    {bannerItemstwo}
                    {bannerItemstwo}
                </BannerWrapper>
            </BannerContainer>
            <ChIcon/>
            {/* activeBtn이 null이 아닐 때만 확인 버튼을 렌더링 */}
            {activeBtn !== null && <TotalBtn onClick ={handleNext}>확인</TotalBtn>}
        </Container>
    )
}