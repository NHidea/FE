import styled from "styled-components"
import { ReactComponent as LeftArrow } from '../Icon/아이콘_헤더-arrow_header.svg' 
import { ReactComponent as Home } from '../Icon/아이콘_헤더-홈_테두리ver..svg' 
import { ReactComponent as Menu } from '../Icon/hamburger 1.svg' 
import { ReactComponent as Card } from '../Icon/이미지-INFJ올리.svg' 
import { ReactComponent as Icon } from '../Icon/이미지-NH심볼.svg' 
import { useNavigate } from "react-router-dom"
import axiosInstance from '../axiosInstance'; 
import React, { useState , useEffect } from 'react';


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
    width : 100%;
    color: var(--black, #262626);
    text-align: center;
    margin : 0;
    /* Title/Heading 2 */
    font-family: "NHMedium";
    font-size: 1.4375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 2.0125rem */
    letter-spacing: -0.02875rem;
    margin-top : 1.5rem;
`
const mbtiColors = {
  "ISTJ": "#BDB7AF", // 예시 색상
  "ISFJ": "#C46B65",
  "INFJ": "#0E1E3B",
  "INTJ": "#0E1E3B",
  "ISTP": "#C6F1FF",
  "ISFP": "#C6F1FF",
  "INFP": "#A1E0F5",
  "INTP": "#EAF3FC",
  "ESTP": "#D3DAFE",
  "ESFP": "#FFD779",
  "ENFP": "#C6F1FF",
  "ENTP": "#5A5341",
  "ESTJ": "#EDEFE9",
  "ESFJ": "#638838",
  "ENFJ": "#C6F1FF",
  "ENTJ": "#EAEBEC"
};

const CardContainer = styled.div`
    display: flex;
    width: 19.0625rem;
    height : 25.09rem;
    margin-top: 1rem;
    padding: 2.5rem 2.5rem 0rem 2.5rem;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1.5rem;
    background: ${(props) => mbtiColors[props.mbtiCode] || "#0E1E3B"};

    /* Shadow/modal */
    box-shadow: 0 8px 8px 0 rgba(18, 18, 18, 0.03), 0 20px 24px 0 rgba(18, 18, 18, 0.08);
`

const MbtiContainer = styled.div`
    display: flex;
    padding: 0 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    width : 3.9375rem;
    height : 1rem;
    border-radius: 3.125rem;
    background: var(--gray-neutral-100, #F6F6F6);
`

const CardText = styled.h2`
    color: var(--white, #FFF);
    text-align: center;
    margin : 0rem;
    margin-top: 0.5rem;
    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const CardImg = styled.img`
    width : 14.06rem;
    height : 14.97rem;
    display: flex;
    margin-top: 1.25rem;
`;

const NhIcon = styled(Icon)`
    width: 1.25rem;
    height: 1.5rem;
    margin-top: 0.5rem;
`
const TextContainer = styled.div`
    width : 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 3rem;
    flex-direction: column;
    gap : 0.2rem;
`

const InfoTitle = styled.h2`
    margin : 0;
    color: var(--black, #262626);

    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const ContentText = styled.h2`
    margin: 0;
    color: var(--black, #262626);
    
    /* Body/Body 1 */
    font-family: "NHMedium";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: 0.01125rem;
`

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
    font-family: "NHMedium";
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 0.75rem;
    border: 1px solid var(--gray-neutral-400, #A3A3A3);
    background: var(--white, #FFF);
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
    font-family: "NHMedium";
    flex-shrink: 0;
    border-radius: 0.75rem;
    background: var(--Primary-NH-Green, #32A13C);
    color : #FFF;
`
export default function Result(){
    const navigate = useNavigate();
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);

    
    

    const handleMain = () => {
        navigate("/")
    }

    useEffect(() => {
        // axiosInstance를 사용하여 GET 요청 보내기
        const fetchmbtiData = async () => {
        try {
            const response = await axiosInstance.get('/api/mbti/result/1'); // baseURL 뒤에 붙을 경로만 작성
            setData(response.data);
            console.log(response.data);
            localStorage.setItem('mbti', response.data.mbtiCode);
            localStorage.setItem('mbtiname', response.data.characterName);
            
        } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchmbtiData();
    }, []);

    if (loading || !data) {
        return <div>로딩 중...</div>;
    }

    return(
        <Container>
            <HeaderContainer>
                <LeftArrowicon/>
                <HeaderText>NH 투두리스트</HeaderText>
                <HomeIcon/>
                <MenuIcon/>
            </HeaderContainer>
            <MainText>찾았다! 나의 소비 성향!</MainText>
            <CardContainer mbtiCode={data.mbtiCode}>
                <MbtiContainer>{data.mbtiCode}</MbtiContainer>
                <CardText>{data.characterName}</CardText>
                <CardImg src={data.imageUrl} alt={data.characterName}/>
                <NhIcon/>
            </CardContainer>
            <TextContainer>
                <InfoTitle>‘{data.characterName}’의 특징</InfoTitle>
                <ContentText>
                            - 성취감을 향한 목표가 가장 큰 원동력이에요.<br/>
                            - 늘 미래를 그리며 한 걸음씩 나아가요.<br/>
                            - 깊이 있는 통찰로 주변을 계획적으로 이끌어요.
                </ContentText>
            </TextContainer>
            <BtnContainer>
                <ShareBtn>공유하기</ShareBtn>
                <NextBtn onClick={handleMain}>할일 확인하기</NextBtn>
            </BtnContainer>
        </Container>
    )
}