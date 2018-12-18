import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <main className="justify-content-center">
        <div>
          <h1 className="greeting">Welcome to Hogwarts School of Wizardry</h1>
        </div>
        <img
          className="col homeImage"
          src="https://www.fxguide.com/wp-content/uploads/2011/07/dneg_HP72-FP-00185.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
