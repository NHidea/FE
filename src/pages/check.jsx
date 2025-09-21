import styled from "styled-components"
import { ReactComponent as LeftArrow } from '../Icon/아이콘_헤더-arrow_header.svg' 
import { ReactComponent as Home } from '../Icon/아이콘_헤더-홈_테두리ver..svg' 
import { ReactComponent as Menu } from '../Icon/hamburger 1.svg' 
import { ReactComponent as Box } from '../Icon/아이콘-checkbox_default.svg' 
import { ReactComponent as UpArrow } from '../Icon/아이콘-arrow_up.svg' 
import { ReactComponent as InfoCheck } from '../Icon/아이콘-check_default.svg' 
import { ReactComponent as OnInfoCheck } from '../Icon/아이콘-check_clicked.svg' 
import { ReactComponent as OnBox } from '../Icon/아이콘-checkbox_clicked.svg' 
import { ReactComponent as RightArrow } from '../Icon/아이콘-chevron-right.svg' 
import { useState, useEffect } from "react"
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
    margin: 0;
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

// 텍스트와 밑줄을 감싸는 래퍼 컴포넌트
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainText = styled.h2`
    color: var(--black, #262626);
    font-family: "NHBold";
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.0325rem;
    margin-top: 0.81rem;
    margin-bottom: -1rem; /* Line 컴포넌트와 겹치도록 마진을 음수로 조정 */
    z-index: 2; 
`;

const Line = styled.div`
    width: 55%; /* 부모(TextWrapper)의 너비에 맞춰지도록 100% 설정 */
    height: 0.875rem;
    background: #B4E0C9;
    z-index: 1; /* 밑줄이 텍스트 아래에 오도록 z-index 설정 */
`;

const FormContainer = styled.div`
    width: 24.06rem;
    height: 15rem;
    display: inline-flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 0.625rem;
    border-radius: 0.75rem;
    border: 1.5px solid var(--gray-neutral-200, #E6E6E6);
    margin-top : 3rem;
`

const FormtwoContainer = styled.div`
    width: 24.06rem;
    height: 17.75rem;
    display: inline-flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 0.625rem;
    border-radius: 0.75rem;
    border: 1.5px solid var(--gray-neutral-200, #E6E6E6);
    margin-top : 3rem;
`
const CheckContainer = styled.div`
    flex-direction : row;
    justify-content: center;
    border-bottom: 1.5px solid var(--gray-neutral-200, #E6E6E6);
    display: flex;
    padding-bottom: 1.5rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    box-sizing: border-box;
`

const CheckIcon = styled(Box)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
`

const FormText = styled.h2`
    /* Title/Heading 4 */
    margin : 0;
    font-family: "NHMedium";
    font-size: 0.925rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
    margin-left : 0.75rem;
`

const UpIcon = styled(UpArrow)`
    width: 1.125rem;
    height: 1.125rem;
    margin-left : 13.06rem;
    margin-top : 0.31rem;
`

const ContentContainer = styled.div`
    display: flex;
    padding-top: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    box-sizing: border-box;
    width : 21.06rem;
    height : 8.75rem;
`

const RowContainer = styled.div`
    width : 100%;
    display:  flex;
    flex-direction: row;
    justify-content: flex-start;
    display: flex;
    padding: 0.25rem 0 0.5rem 0;
    box-sizing: border-box;
    align-items: center;
    align-self: stretch;
`

const InfoCheckicon = styled(InfoCheck)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
`

const InfoText = styled.h2`
    margin: 0;
    color: var(--black, #121212);
    /* Title/Heading 5 */
    font-family: "Spoqa Han Sans Neo";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
    margin-left: 0.75rem;
    margin-right: auto;
`

const RightarrowIcon = styled(RightArrow)`
    width: 1.125rem;
    height: 1.625rem;
`

const OkBtn = styled.div`
    display: flex;
    width: 24.0625rem;
    height : 4.37rem;
    border-radius: 0.75rem;
    background: ${props => props.active ? ' var(--Primary-NH-Green, #32A13C);' : 'var(--gray-neutral-200, #E6E6E6)'};
    color: ${props => props.active ? '#fff' : '#8c8c8c'};
    padding: 1.25rem 0;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    margin-top: 3rem;
    cursor: ${props => props.active ? 'pointer' : 'not-allowed'};
`

const OnInfoCheckicon = styled(OnInfoCheck)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
`

const OnCheckIcon = styled(OnBox)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
`
export default function Check() {

    const [requiredChecks, setRequiredChecks] = useState([false, false, false]);
    const [optionalChecks, setOptionalChecks] = useState([false, false, false, false]);
    const [isButtonActive, setIsButtonActive] = useState(false);
    const navigate = useNavigate();

const handleButtonClick = () => {
        if (isButtonActive) {
    navigate("/surveyone");
    }
    };

    useEffect(() => {
        const allRequiredChecked = requiredChecks.every(check => check);
        const allOptionalChecked = optionalChecks.every(check => check);
        setIsButtonActive(allRequiredChecked && allOptionalChecked);
    }, [requiredChecks, optionalChecks]);

    const handleRequiredAllCheck = () => {
        const isAllChecked = requiredChecks.every(check => check);
        const newChecks = requiredChecks.map(() => !isAllChecked);
        setRequiredChecks(newChecks);
    };

    const handleRequiredCheck = (index) => {
        const newChecks = [...requiredChecks];
        newChecks[index] = !newChecks[index];
        setRequiredChecks(newChecks);
    };

    const handleOptionalAllCheck = () => {
        const isAllChecked = optionalChecks.every(check => check);
        const newChecks = optionalChecks.map(() => !isAllChecked);
        setOptionalChecks(newChecks);
    };

    const handleOptionalCheck = (index) => {
        const newChecks = [...optionalChecks];
        newChecks[index] = !newChecks[index];
        setOptionalChecks(newChecks);
    };


    return (
        <Container>
            <HeaderContainer>
                <LeftArrowicon />
                <HeaderText>NH 투두리스트</HeaderText>
                <HomeIcon />
                <MenuIcon />
            </HeaderContainer>
            <TextWrapper>
                <MainText>
                    서비스 이용 전,<br />약관에 동의해 주세요
                </MainText>
                <Line />
            </TextWrapper>
            <FormContainer>
                <CheckContainer>
                    {requiredChecks.every(check => check) ? (
                        <OnCheckIcon onClick={handleRequiredAllCheck} />
                    ) : (
                        <CheckIcon onClick={handleRequiredAllCheck} />
                    )}
                    <FormText>필수 동의</FormText>
                    <UpIcon />
                </CheckContainer>
                <ContentContainer>
                    <RowContainer>
                        {requiredChecks[0] ? <OnInfoCheckicon onClick={() => handleRequiredCheck(0)} /> : <InfoCheckicon onClick={() => handleRequiredCheck(0)} />}
                        <InfoText>AI 서비스 이용약관</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                    <RowContainer>
                        {requiredChecks[1] ? <OnInfoCheckicon onClick={() => handleRequiredCheck(1)} /> : <InfoCheckicon onClick={() => handleRequiredCheck(1)} />}
                        <InfoText>개인(신용)정보 추가 수집·이용 동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                    <RowContainer>
                        {requiredChecks[2] ? <OnInfoCheckicon onClick={() => handleRequiredCheck(2)} /> : <InfoCheckicon onClick={() => handleRequiredCheck(2)} />}
                        <InfoText>개인정보 처리위탁동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                </ContentContainer>
            </FormContainer>
            <FormtwoContainer>
                <CheckContainer>
                    {optionalChecks.every(check => check) ? (
                        <OnCheckIcon onClick={handleOptionalAllCheck} />
                    ) : (
                        <CheckIcon onClick={handleOptionalAllCheck} />
                    )}
                    <FormText>선택 동의</FormText>
                    <UpIcon />
                </CheckContainer>
                <ContentContainer>
                    <RowContainer>
                        {optionalChecks[0] ? <OnInfoCheckicon onClick={() => handleOptionalCheck(0)} /> : <InfoCheckicon onClick={() => handleOptionalCheck(0)} />}
                        <InfoText>맞춤형 추천·행태정보(프로파일링) 동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                    <RowContainer>
                        {optionalChecks[1] ? <OnInfoCheckicon onClick={() => handleOptionalCheck(1)} /> : <InfoCheckicon onClick={() => handleOptionalCheck(1)} />}
                        <InfoText>제휴 리워드 제3자 제공 동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                    <RowContainer>
                        {optionalChecks[2] ? <OnInfoCheckicon onClick={() => handleOptionalCheck(2)} /> : <InfoCheckicon onClick={() => handleOptionalCheck(2)} />}
                        <InfoText>NH마이데이터 연동 동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                    <RowContainer>
                        {optionalChecks[3] ? <OnInfoCheckicon onClick={() => handleOptionalCheck(3)} /> : <InfoCheckicon onClick={() => handleOptionalCheck(3)} />}
                        <InfoText>위치기반 개인화/광고 수신 동의</InfoText>
                        <RightarrowIcon />
                    </RowContainer>
                </ContentContainer>
            </FormtwoContainer>
            <OkBtn onClick = {handleButtonClick} active={isButtonActive}>다음</OkBtn>
        </Container>
    );
}