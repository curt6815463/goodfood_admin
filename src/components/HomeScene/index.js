import React from 'react';

const HomeScene = ({logout, changePage}) =>
  <div>
    <button onClick={logout}>
      登出
    </button>
    <button onClick={() => changePage('userManager')}>
      Go to UserManager
    </button>
    <button onClick={() => changePage('orderList')}>
      Go to OrderList
    </button>
    <h1>Home Scene</h1>
  </div>

export default HomeScene;
