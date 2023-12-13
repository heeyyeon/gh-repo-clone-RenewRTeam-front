import React, { useState } from 'react';
import './User2.css';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import DataTradeList from '../../components/DataTradeList/DataTradeList';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';


function User2() {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const navigate = useNavigate();

    const [model] = useState({
        name: '본인이름'
    })

    const myContentButton = () => {
        navigate('/CardListCollector')
    }

    const logOutButton = () => {
        setIsModalVisible(true);    //모달 활성화
    }

    const handleConfirm = () => {
        setIsModalVisible(false);
        navigate('/Login');
    }

    const handleCancle = () => {
        setIsModalVisible(false);
    }

    const handleAccountDeletion = () => {
        navigate('/AccountDeletion')
    }

    return(
        <>
        <DataTradeList listTitle={"사용자"} />
        <div className='user'>
            <p style={{ 
                color: 'black', margin:'32px 0px 0px 16px', fontSize:'24px', fontFamily:'SOYOMapleRegular'}}>
                    <b>{model ? model.name : "Loading..."}님, 안녕하세요.</b></p>
        
            <div className='user-menu'>
                <p onClick={myContentButton}>📸 내가 쓴 글</p>
                <p onClick={logOutButton}>📱 로그아웃</p>
                {isModalVisible && (
                    <Modal
                        onConfirm={handleConfirm}
                        onCancel={handleCancle}
                        msg={"로그아웃하시겠습니까?"}
                    />
                )}
                <p onClick={handleAccountDeletion}>❌ 회원탈퇴</p>
            </div>
        </div>
        <UserNavbar />
        </>
    )
}

export default User2;