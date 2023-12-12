import React, { useState } from 'react';
import Trading from '../../components/Trading/Trading';
import { useNavigate } from 'react-router-dom';
import './Reward.css';
import DataTradeList from '../../components/DataTradeList/DataTradeList';
import RewardNavbar from '../../components/RewardNavbar/RewardNavbar';

function Reward() {
    const navigate = useNavigate();
    const [model] = useState({
        myReward: '본인이 가진 리워드',
        image: 'https://via.placeholder.com/150',
        name: '거래한 사람이름',
        date: '거리한 날짜',
        trading: '입출금 내역',
        balance: '잔액'
    });

    const handleTransferClick = () => {
        navigate('/RewardSend'); // RewardSend 컴포넌트로 이동
    };

    return (
        <>
        <DataTradeList listTitle={"리워드"} />
        <div className='reward'>
            <p style={{ 
                color: 'black', margin:'60px 0px 0px 16px', fontSize:'16px'}}>당신의 리워드는</p>
            <p style={{margin:'6px 16px', fontSize:'32px'}}><b>{model ? model.myReward : "Loading..."} </b></p>
            <p style={{margin:'6px 16px', fontSize:'16px'}}>입니다.</p>
            {/** 버튼 컴포넌트 들어올 자리, 지금은 만든게 없어서 대체 */}
            <div className='reward-button' onClick={handleTransferClick}><b>이체하기</b></div>
            <p style={{color:'#A5A5A5', marginLeft:'16px'}}>거래내역</p>
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
            <Trading
            image src={model ? model.image : "defaul_image.png"} 
            name= {model ? model.name : "Loading..."}
            date= {model ? model.date : "Loading..."}
            trading= {model ? model.trading : "Loading..."}
            balance= {model ? model.balance : "Loading..."}
            />
        </div>
        <RewardNavbar />
        </>
    )
}

export default Reward;