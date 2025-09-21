import styled from "styled-components"
import { ReactComponent as LeftArrow } from '../Icon/아이콘_헤더-arrow_header.svg' 
import { ReactComponent as Home } from '../Icon/아이콘_헤더-홈_테두리ver..svg' 
import { ReactComponent as Menu } from '../Icon/hamburger 1.svg' 
import { ReactComponent as Coin } from '../Icon/이미지_다이어리와코인.svg' 
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    width: 26.5625rem;
    height: 58.25rem;
    display: flex;
    flex-direction: column;
    background: var(--gray-neutral-50, #FAFAFA);
    padding : 1rem 1.25rem 1rem 1.25rem;
    box-sizing: border-box;
    align-items: flex-start;
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

const MainText = styled.h1`
    color: #000;
    /* Title/Heading 0 */
    font-family: "NHBold";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.8125rem */
    letter-spacing: -0.0375rem;
    margin: 0;
    margin-top: 2.5rem;
`

const SubText = styled.h1`
    color: var(--black, #262626);
    /* Body/Body 3 */
    font-family: "NHMedium";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
    margin : 0;
    margin-top: 1.5rem;
`

const ImgContainer = styled.div`
    display: flex;
    width : 26rem;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
`

const CoinImg = styled(Coin)`
    width: 25.56244rem;
    height: 22.5rem;
`

const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5.62rem;
`

const ConsumeBtn = styled.div`
    display: flex;
    width: 7.25rem;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.75rem;
    border: 1px solid var(--gray-neutral-400, #A3A3A3);
    background: var(--white, #FFF);
    color: var(--black, #262626);
    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const TodoBtn = styled.div`
    display: flex;
    width: 15.8125rem;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.75rem;
    background: var(--Primary-NH-Green, #32A13C);
    box-sizing: border-box;
    margin-left: 1rem;
    color: var(--white, #FFF);
    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`
export default function Info(){

    const navigate = useNavigate();

    const handlecheck = () => {
        navigate("/check")
    }

    return(
        <Container>
            <HeaderContainer>
                <LeftArrowicon/>
                <HeaderText>NH 투두리스트</HeaderText>
                <HomeIcon/>
                <MenuIcon/>
            </HeaderContainer>
            <MainText>
                AI가 뽑은 오늘의 할일,
                <br/>New Hope 혜택이 와르르!
            </MainText>
            <SubText>
                내 소비 데이터를 기반으로 오늘 꼭 필요한 <br/> 맞춤형 할 일을 딱 맞게 보여줘요.  <br/>
               할일을 완료화면 금리쿠폰, 제철 농산물 쿠폰 등을 <br/> 뽑을 수 있는 뽑기권이 생겨요.
            </SubText>
            <ImgContainer>
                <CoinImg/>
            </ImgContainer>
            <BtnContainer>
                <ConsumeBtn>소비내역</ConsumeBtn>
                <TodoBtn onClick = {handlecheck}>나의 할일 만들기</TodoBtn>
            </BtnContainer>
        </Container>
    )
}