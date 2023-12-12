import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SendSuccess.css';
import RewardNavbar from '../../components/RewardNavbar/RewardNavbar';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';

function SendSuccess() {
    const navigate = useNavigate();

    function onCheckButtonClick() {
        navigate('/reward'); // Reward 컴포넌트로 이동
    }

    return (
        <>
        <BackDataTradeList listTitle={"리워드 이체"} />
        <div className='SendSuccess'>
            <div className='SendSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>이체되었습니다.</p>
            </div>
             <div className='checkButton' onClick={onCheckButtonClick}>확인</div>
        </div>
        <RewardNavbar />
        </>
    )
}

export default SendSuccess;