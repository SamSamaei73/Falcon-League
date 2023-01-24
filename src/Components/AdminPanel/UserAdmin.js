import React from 'react';
import Header from '../Items/HeaderGame';
import '../../Scss/Admins.scss';
import AdminHead from './Itemas/AdminHead';
import Footer from '../Firstpage/Footer';
import GameView from './Itemas/GameView';

const UserAdmin = () => {
  return (
    <div id='UserAdmin'>
        <Header/>
        <AdminHead/>
        <GameView/>
        <Footer/>
    </div>
  )
}

export default UserAdmin