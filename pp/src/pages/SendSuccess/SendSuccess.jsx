import React from 'react';
import './SendSuccess.css';
import PointNavbar from '../../components/PointNavbar/PointNavbar';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';

function SendSuccess() {
    return (
        <>
        <BackDataTradeList listTitle={"리워드 이체"} />
        <div className='SendSuccess'>
            <div className='SendSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>이체되었습니다.</p>
            </div>
            <div className='checkButton'>확인</div>
        </div>
        <PointNavbar />
        </>
    )
}

export default SendSuccess;