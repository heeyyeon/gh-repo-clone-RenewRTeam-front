import React from 'react';
import './DepositSuccess.css';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import PointNavbar from '../../components/PointNavbar/PointNavbar';

function DepositSuccess() {
    return (
        <>
        <BackDataTradeList listTitle={"입금"} />
        <div className='DepositSuccess'>
            <div className='DepositSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>입금되었습니다.</p>
            </div>
            <div className='checkButton'>확인</div>
        </div>
        <PointNavbar />
        </>

    )
}

export default DepositSuccess;