//데이터 제공자의 사용자 페이지
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css';
import UserNavbar2 from '../../components/UserNavbar2/UserNavbar2';
import DataTradeList from '../../components/DataTradeList/DataTradeList';

function User() {
    const navigate = useNavigate();
    const [model] = useState({
        name: '본인이름'
    })

    function handleMyPostsClick() {
        navigate('/CardListTag'); // CardListTag 컴포넌트로 이동
    }

    function handleAccountDeletionClick() {
        navigate('/AccountDeletion'); // AccountDeletion 컴포넌트로 이동
    }

    return(
        <>
        <div className='user'>
        <DataTradeList listTitle={"사용자"} />
            <p style={{ 
                color: 'black', margin:'32px 0px 0px 16px', fontSize:'24px', fontFamily:'SOYOMapleRegular'}}>
                    <b>{model ? model.name : "Loading..."}님, 안녕하세요.</b></p>
        
            <div className='user-menu'>
                <p onClick={handleMyPostsClick}>📸 내가 쓴 글</p>
                <p>📱 로그아웃</p>
                <p onClick={handleAccountDeletionClick}>❌ 회원탈퇴</p>
            </div>
        </div>
        <UserNavbar2 />
        </>
    )
}

export default User;