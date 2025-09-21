// RewardModal.jsx
import styled from "styled-components"
import { ReactComponent as Apple } from '../Icon/이미지_사과축하.svg' 
import { ReactComponent as Cancle } from '../Icon/아이콘-cancel_gray.svg' 

const ModalContainer = styled.div`
    display: flex;
    position: relative;
    width: 24.0625rem;
    height: 21.1875rem;
    padding: 1.75rem 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    box-sizing: border-box;
    background-color: white; // 👈 Add background color
    border-radius: 1rem; // 👈 Add border-radius for styling
`

const AppleImg = styled(Apple)`
    width : 7.5rem;
    height : 7.5rem;
`
const InfoText = styled.h2`
    margin :0;
    color: var(--black, #262626);
    text-align: center;
    /* Title/Heading 5 */
    font-family: "NHMedium";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
`

const SubText = styled.h2`
    margin : 0;
    color: var(--black, #262626);
    text-align: center;
    margin-top:0.62rem;
    /* Title/Heading 3 */
    font-family: "NHBold";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const Btn = styled.div`
    display: flex;
    padding: 1.25rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    box-sizing: border-box;
    width : 21.0625rem;
    height : 4.375rem;
    border-radius: 0.75rem;
    background: var(--Primary-NH-Green, #32A13C);
    color: var(--white, #FFF);
    /* Title/Heading 3 */
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
    margin-top: 1.81rem;
    cursor: pointer; // 👈 Add cursor: pointer;
`

const CancleImg = styled(Cancle)`
    width: 2rem;
    height: 2rem;
`

const CancleBtnContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
`

// Pass a prop to handle closing the modal
export default function RewardModal({ closeModal }){
    return(
        <ModalContainer>
            <CancleBtnContainer onClick={closeModal}>
                <CancleImg />
            </CancleBtnContainer>
            <AppleImg/>
            <InfoText>‘하나로 마트 제철 사과 5% 할인 쿠폰’</InfoText>
            <SubText>축하드립니다!</SubText>
            <Btn onClick={closeModal}>확인</Btn>
        </ModalContainer>
    )
}