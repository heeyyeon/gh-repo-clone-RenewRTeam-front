import React from 'react';
import './DepositSuccess.css';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import PointNavbar from '../../components/PointNavbar/PointNavbar';
import { useNavigate } from 'react-router-dom';

function DepositSuccess() {


    const navigate = useNavigate();

    const handleOKButton = () => {
        navigate('/Reward2');
    }
    return (
        <>
        <BackDataTradeList listTitle={"입금"} />
        <div className='DepositSuccess'>
            <div className='DepositSuccess-text' style={{margin:'16px', whiteSpace: 'pre-wrap'}}>
                <p>🎉</p>
                <p>안전하게</p>
                <p>입금되었습니다.</p>
            </div>
            <div className='checkButton' onClick={handleOKButton}>확인</div>
        </div>
        <PointNavbar />
        </>

    )
}

export default DepositSuccess;