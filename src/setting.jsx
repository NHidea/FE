import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap : 1rem;
`
const SettingBtn = styled.div`
    width : 15rem;
    height : 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
    border-radius: 1rem;
    font-family: "TJJoyofsingingB";
`


export default function Setting(){

    const navigate = useNavigate();

    return(
    <PageContainer>
      <SettingBtn onClick={() => navigate("/main")}>메인</SettingBtn>
      <SettingBtn onClick={() => navigate("/check")}>약관동의</SettingBtn>
      <SettingBtn onClick={() => navigate("/reward")}>보상 룰렛</SettingBtn>
      <SettingBtn onClick={() => navigate("/surveyone")}>설문조사1</SettingBtn>
      <SettingBtn onClick={() => navigate("/surveytwo")}>설문조사2</SettingBtn>
      <SettingBtn onClick={() => navigate("/surveythree")}>설문조사3</SettingBtn>
      <SettingBtn onClick={() => navigate("/surveyfour")}>설문조사4</SettingBtn>
      <SettingBtn onClick={() => navigate("/result")}>결과</SettingBtn>
      <SettingBtn onClick={() => navigate("/rewardmodal")}>보상 모달</SettingBtn>
      <SettingBtn onClick={() => navigate("/info")}>서비스 설명</SettingBtn>
    </PageContainer>
    )
}