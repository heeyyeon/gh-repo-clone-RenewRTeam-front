import React, { useState } from 'react';
import './User.css';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import DataTradeList from '../../components/DataTradeList/DataTradeList';

function User() {

    const [model] = useState({
        name: '본인이름'
    })
    return(
        <>
        <DataTradeList listTitle={"사용자"} />
        <div className='user'>
            <p style={{ 
                color: 'black', margin:'32px 0px 0px 16px', fontSize:'24px', fontFamily:'SOYOMapleRegular'}}>
                    <b>{model ? model.name : "Loading..."}님, 안녕하세요.</b></p>
        
            <div className='user-menu'>
                <p>📸 내가 쓴 글</p>
                <p>📱 로그아웃</p>
                <p>❌ 회원탈퇴</p>
            </div>
        </div>
        <UserNavbar />
        </>
    )
}

export default User;