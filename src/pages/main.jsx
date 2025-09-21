import styled from "styled-components"
import { ReactComponent as Arrow } from '../Icon/아이콘_chevron-right.svg' 
import { ReactComponent as Bell } from '../Icon/아이콘_notification_수정ver..svg' 
import { ReactComponent as Menu } from '../Icon/hamburger 1.svg' 
import { ReactComponent as Event } from '../Icon/메인_투두리스트배너.svg' 
import { ReactComponent as Img } from '../Icon/이미지_메인-화면에 들어가는 투두 이미지.svg' 
import { ReactComponent as Consume } from '../Icon/아이콘_지출-소비.svg' 
import { ReactComponent as Myimg } from '../Icon/이미지-원INFJ올리.svg' 
import { ReactComponent as Box } from '../Icon/아이콘-checkbox_default.svg' 
import { ReactComponent as OnBox } from '../Icon/아이콘-checkbox_clicked.svg' 
import { ReactComponent as New } from '../Icon/이미지-New.svg' 
import { ReactComponent as One } from '../Icon/one.svg' 
import { ReactComponent as Two } from '../Icon/two.svg' 
import { ReactComponent as Three } from '../Icon/three.svg' 
import { ReactComponent as Four } from '../Icon/four.svg' 
import Switch from 'react-switch';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axiosInstance"


const Container = styled.div`
    width: 26.5625rem;
    height: auto;
    display: flex;
    flex-direction: column;
    background: var(--gray-neutral-50, #FAFAFA);
    padding : 1rem 1.25rem 1rem 1.25rem;
    box-sizing: border-box;
    align-items: flex-start;
`
const UserContianer = styled.div`
    width: 24.0625rem;
    height : 3.5rem;
    margin : 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding : 0.87rem 0rem 0.87rem 0rem;
    box-sizing: border-box;
`

const UserTitle = styled.h2`
    margin : 0;
    color: #121212;
    text-align: center;
    font-feature-settings: 'dlig' on;
    font-family: "NHMedium";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

// 수정된 부분: div로 변경
const EventContainer = styled.div`
    width: 24.0625rem;
    height: 4.9375rem;
    border-radius: 0.75rem;
    padding: 0.94rem 1.5rem 1rem 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    position: relative; // SVG 위치 지정을 위한 position
`;

// 수정된 부분: SVG를 감싸는 래퍼 추가
const EventWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; // 텍스트 뒤에 위치
`;

const EventmainText = styled.h2`
    margin: 0;
    color: var(--black, #262626);

    /* Title/Heading 4 */
    font-family: "NHBold";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
     z-index: 1;
`
const EventsubText = styled.h2`
    margin: 0;
    color: var(--gray-neutral-600, #666);
    font-feature-settings: 'dlig' on;
    font-family: "NHMedium";
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.3rem */
    letter-spacing: -0.01625rem;
    z-index: 1; // 텍스트를 SVG 위에 위치
`
const AcountHeader = styled.div`
    display: flex;
    width: 24.0625rem;
    height : 2rem;
    flex-direction: row;
    margin-top: 1.5rem;
    gap: 14.31rem;
`

const HeaderText = styled.h2`
    color: #000;
      /* Title/Heading 2 */
    font-family: "NHBold";
    font-size: 1.4375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 2.0125rem */
    letter-spacing: -0.02875rem;
    margin: 0;
`

const CustomLabel = styled.span`
    color: #fff;
    font-size: 0.35rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const TotalText = styled.h2`
    color: var(--gray-neutral-600, #666);
    text-align: center;
    font-feature-settings: 'dlig' on;
    font-family: "NHMedium";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.01rem;
    margin : 0rem;
    margin-top: 0.5rem;
`

const AcountContainer = styled.div`
    width: 24.0625rem;
    height: 6.875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: var(--white, #FFF);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
    margin : 0rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121212;

    text-align: center;
    /* Title/Heading 4 */
    font-family: "NHBold";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
`

const TodoContainer = styled.div`
    width: 24.0625rem;
    height: 6.875rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: var(--white, #FFF);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
    margin : 0rem;
    margin-top: 1rem;
    display: flex;
    padding : 1.75rem 1rem 0rem 1.5rem;
    box-sizing: border-box;
`

const TodoonContainer = styled.div`
    width: 24.0625rem;
    height: 29.19rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: var(--white, #FFF);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
    margin : 0rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    padding : 1.75rem 1rem 0rem 1.5rem;
    box-sizing: border-box;
`

const TodoHeader = styled(HeaderText)`
    margin-top: 3rem;
`

const SwitchWrapper = styled.div`
    margin-left: 8.5rem; 
    display: flex;
    margin-top : 0.3rem;
`;

const ConsumeContainer = styled.div`
    width: 24.0625rem;
    height: 9.5625rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: var(--white, #FFF);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
    padding : 1.75rem 1.5rem 1.75rem 1.5rem;
    box-sizing: border-box;
    margin-top: 1rem;
`

const ArrowIcon = styled(Arrow)`      
    width: 1.54738rem;
    height: 1.04225rem;
    flex-shrink: 0;
    color : var(--gray-neutral-400, #A3A3A3);
    margin: 0;
    margin-top: 0.42rem;
    display: flex;
    `

const ArrowTwoIcon = styled(Arrow)`      
    width: 1.54738rem;
    height: 1.04225rem;
    flex-shrink: 0;
    color : var(--gray-neutral-400, #A3A3A3);
    margin: 0;
    margin-top: 0.3rem;
    display: flex;
    `

const BellIcon = styled(Bell)`
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 1rem;
`

const MenuIcon = styled(Menu)`
    width: 1.75rem;
    height: 1.75rem;
    margin-left : 1rem;
`

const TodoImg = styled(Img)`
    width: 5.19rem;
    height : 4.94rem;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const TodoSubtext = styled.h2`
    margin: 0;
    color: #121212;
    /* Title/Heading 5 */
    font-family: "NHMedium";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
`

const TodoMaintext = styled.h2`
    color: #121212;
    margin: 0;
    /* Title/Heading 5 */
    font-family: "NHBold";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ConsumeIcon = styled(Consume)`
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.375rem;
    align-items: center;
`

const ConsumetextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 9.14rem;
    margin-top: 0.56rem;
`

const GoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const GoText = styled.h2`
    margin: 0;
    color: var(--gray-neutral-600, #666);
    text-align: center;
    font-feature-settings: 'dlig' on;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
`
const MyContainer = styled.div`
    display: flex;
    flex-direction: row;
    width : 20.56rem;
    height : 5rem;
`

const MytextConatiner = styled.div`
    display : flex;
    flex-direction: column;
    padding : 0.81rem 0rem 0.81rem 0rem;
    box-sizing: border-box;
`

// 동적으로 컴포넌트가 변경되므로 MyIcon을 props로 받도록 변경
const MyIcon = styled.svg`
    width : 5rem;
    height : 5rem;
    display: flex;
    ${(props) => props.clickable && `
        cursor: pointer;
    `}
`;

const MymainText = styled.h2`
    margin : 0;
    width : 15.56rem;
    color: #121212;
    text-align: right;

    /* Title/Heading 3 */
    font-family: "NHBold";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.05rem;
`

const MysubText = styled.h2`
    margin : 0;
    width : 15.56rem;
    color: var(--gray-neutral-600, #666);
    text-align: right;
    /* Title/Heading 5 */
    font-family: "Spoqa Han Sans Neo";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
    letter-spacing: -0.02rem;
`

const ListContainer = styled.div`
    width : 20.56rem;
    height : 7.56rem;
    display: flex;
    flex-direction: column;
    margin-top: 1.28rem;
`

const ListContent = styled.div`
    display : flex;
    flex-direction: row;
    cursor: pointer;
    margin-top: 0.53rem;
`

const ListText = styled.h2`
    margin : 0;
    width : 18.81rem;
    color: var(--black, #262626);
    /* Title/Heading 4 */
    font-family: "NHMedium";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.6875rem */
    letter-spacing: -0.01125rem;
`

const ListsubText = styled.h2`
    margin : 0;
    color: var(--gray-neutral-400, #A3A3A3);
    font-feature-settings: 'dlig' on;

    /* Body/Body 2 */
    font-family: "NHMedium";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.4rem */
    letter-spacing: -0.00875rem;
`

const CheckIcon = styled(Box)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
`

const OnCheckIcon = styled(OnBox)`
    display: flex;
    width: 1.75rem;
    height: 1.75rem;
`

const NowContainer = styled.div`
    display: flex;
    width: 21.0625rem; /* Updated width to match layout */
    padding: 1rem 1.25rem; /* Added padding */
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    border-radius: 0.75rem;
    background: var(--Secondary-green-2, #FAFFF9);
    margin-top : 1.28rem;
    /* Shadow/shadow-2 */

`

const IngContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const MaintextContainer = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5rem;
`

const MainText = styled.h2`
    margin : 0;
    color: #121212;
    font-feature-settings: 'dlig' on;

    /* Body/Body 2 */
    font-family: "NHMedium";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.4rem */
    letter-spacing: -0.00875rem;
`

const SubText = styled.h2`
    margin : 0;
    color: var(--gray-neutral-400, #A3A3A3);
    font-feature-settings: 'dlig' on;

    /* Body/Body 4 */
    font-family: "NHMedium";
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.3rem */
    letter-spacing: -0.01625rem;
`
const NewIcon = styled(New)`
    width : 1rem;
    height : 1rem;
    margin-left: 0.28rem;
`

export default function Main() {
    const [isNotificationsOn, setIsNotificationsOn] = useState(false);
    // ✅ todos 상태의 초기값을 빈 배열로 변경
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [mbti, setMbti] = useState(null);
    const [mbtiname, setMbtiname] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState('');

    const getMyIconComponent = () => {
        const completedCount = todos.filter(todo => todo.checked).length;
        const totalCount = todos.length;
        if (totalCount === 0) {
            return One;
        }
        const progress = (completedCount / totalCount) * 100;
        if (progress === 0) {
            return One;
        } else if (progress > 0 && progress <= 34) {
            return Two;
        } else if (progress > 33 && progress <= 67) {
            return Three;
        } else {
            return Four;
        }
    };

    const MyDynamicIcon = getMyIconComponent();

    const handleMyIconClick = () => {
        if (MyDynamicIcon === Four) {
            navigate("/reward");
        }
    };

    const getFormattedDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleTodo = () => {
        navigate("/info");
    };

    const handleCheckClick = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };

    useEffect(() => {
        const formattedDate = getFormattedDate();
        setDate(formattedDate);
        const body = {
            userId: 1,
            date: formattedDate,
        };
        const fetchTodoData = async () => {
            try {
                const response = await axiosInstance.get('/api/todos/items/by-user/1', {
                    params: body,
                });

                // ✅ API 응답 데이터로 todos 상태를 업데이트
                const apiTodos = response.data.map(item => ({
                    text: item.title,
                    checked: item.checked,
                    subText: item.summary,
                }));
                setTodos(apiTodos);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('API 호출 중 오류 발생:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTodoData();
    }, []);

    useEffect(() => {
        const storedMbti = localStorage.getItem('mbti');
        const storedMbtiname = localStorage.getItem('mbtiname');
        setMbtiname(storedMbtiname);
        setMbti(storedMbti);
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>로딩 중입니다...</div>;
    }

    const hasTodoData = !!mbti;

    const handleSwitchChange = (checked) => {
        setIsNotificationsOn(checked);
        if (checked) {
            console.log('스위치 켜짐: 로컬 스토리지 초기화');
            localStorage.clear();
        } else {
            console.log('스위치 꺼짐: 로컬 스토리지 초기화');
            localStorage.clear();
        }
    };

    return (
        <Container>
            <UserContianer>
                <UserTitle>김민석님</UserTitle>
                <ArrowIcon />
                <SwitchWrapper>
                    <Switch
                        onChange={handleSwitchChange}
                        checked={isNotificationsOn}
                        offColor="#BDBDBD"
                        onColor="#5E83F2"
                        height={20}
                        width={40}
                        uncheckedIcon={<CustomLabel>큰글</CustomLabel>}
                        checkedIcon={false}
                    />
                </SwitchWrapper>
                <BellIcon />
                <MenuIcon />
            </UserContianer>
            <EventContainer onClick={handleTodo}>
                <EventWrapper>
                    <Event />
                </EventWrapper>
                <EventsubText>N누가 H해? NH가 해!</EventsubText>
                <EventmainText>NH랑 할일 완료하고 리워드 받자!</EventmainText>
            </EventContainer>
            <AcountHeader>
                <HeaderText>내 계좌</HeaderText>
                <TotalText>전체계좌조회</TotalText>
            </AcountHeader>
            <AcountContainer>
                상단 스위치를 키고 새로고침하면<br/>mbti가 초기화됩니다.
            </AcountContainer>
            <TodoHeader>내 투두리스트</TodoHeader>
            {hasTodoData ? (
                <TodoonContainer>
                    <MyContainer>
                        <div onClick={handleMyIconClick} style={{ cursor: MyDynamicIcon === Four ? 'pointer' : 'default' }}>
                            <MyDynamicIcon />
                        </div>
                        <MytextConatiner>
                            <MymainText>오늘의 New Hope! 할일</MymainText>
                            <MysubText>{mbtiname} | {mbti}</MysubText>
                        </MytextConatiner>
                    </MyContainer>
                    <ListContainer>
                        {todos.map((todo, index) => (
                            <div key={index}>
                                <ListContent onClick={() => handleCheckClick(index)}>
                                    <ListText>{todo.text}</ListText>
                                    {todo.checked ? <OnCheckIcon /> : <CheckIcon />}
                                </ListContent>
                                {todo.subText && <ListsubText>{todo.subText}</ListsubText>}
                            </div>
                        ))}
                        <NowContainer>
                            <IngContainer>
                                <MaintextContainer>
                                    <MainText>🌟 하나로마트 제철 사과 5% 할인 쿠폰 🌟 </MainText>
                                    <NewIcon />
                                </MaintextContainer>
                                <SubText>최근 ‘사과 쿠키’ 결제 내역이 있네요!</SubText>
                                <MaintextContainer>
                                    <MainText>🌟 NH올원e적금 0.2% 금리 우대 쿠폰🌟</MainText>
                                    <NewIcon />
                                </MaintextContainer>
                            </IngContainer>
                        </NowContainer>
                    </ListContainer>
                </TodoonContainer>
            ) : (
                <TodoContainer onClick={handleTodo}>
                    <TextContainer>
                        <TodoSubtext>소비 데이터로 완성되는 AI 맞춤형 할일</TodoSubtext>
                        <TodoMaintext>NH투두리스트</TodoMaintext>
                    </TextContainer>
                    <TodoImg />
                </TodoContainer>
            )}
            <TodoHeader>지출</TodoHeader>
            <ConsumeContainer>
                <IconContainer>
                    <ConsumeIcon />
                    <TodoMaintext>소비</TodoMaintext>
                </IconContainer>
                <ConsumetextContainer>
                    <TodoMaintext>이번 달에 얼마나 썼을까?</TodoMaintext>
                    <GoContainer>
                        <GoText>흩어진 소비내역 확인하기</GoText>
                        <ArrowTwoIcon />
                    </GoContainer>
                </ConsumetextContainer>
            </ConsumeContainer>
        </Container>
    );
}