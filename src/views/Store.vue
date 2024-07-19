<template>
    <div class="containerw">
      <div class="textw">
        <h1>YOGA TRAINER TEAM</h1>
        <P>
          Lorem ipsum dolor, 
          sit amet consectetur adipisicing elit. Magni, autem.
        </P>
      </div>
      <div class="cardsw">
        <div class="cardw">
          <div class="card-textw">
            <h3>Chai Naing</h3>
            <span>Techlick</span>
            <p>
              Lorem ipsum dolor sit 
              amet consectetur adipisicing elit. Facere, quisquam.
            </p>
            <div class="links">
              <a href="" class="fab"><i class='bx bxl-facebook'></i></a>
              <a href="" class="fab"><i class='bx bxl-pinterest' ></i></a>
              <a href="" class="fab"><i class='bx bxl-twitter' ></i></a>
              <a href="" class="fab"><i class='bx bxl-linkedin-square' ></i></a>
            </div>
          </div>
          <!-- <img src="https://shorturl.at/qfOig" alt=""> -->
        </div>
        <div class="cardw">
          <div class="card-textw">
            <h3>Chai Naing</h3>
            <span>Techlick</span>
            <p>
              Lorem ipsum dolor sit 
              amet consectetur adipisicing elit. Facere, quisquam.
            </p>
            <div class="links">
              <a href="" class="fab"><i class='bx bxl-facebook'></i></a>
              <a href="" class="fab"><i class='bx bxl-pinterest' ></i></a>
              <a href="" class="fab"><i class='bx bxl-twitter' ></i></a>
              <a href="" class="fab"><i class='bx bxl-linkedin-square' ></i></a>
            </div>
          </div>
          <!-- <img src="https://shorturl.at/qfOig" alt=""> -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .containerw {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .textw {
    text-align: center;
    margin: 40px 0 150px 0;
  }
  /* .textw h1 {
    font-size: 35px;
    font-weight: normal;
    margin-bottom: 20px;
  } */
  .textw p{
    font-size: 18px;
    color: gray;
  }
  .cardsw {
    width: 100%;
    padding: 0 7%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  .cardw {
    position: relative;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0 5px 7px #e2e2e2;
    user-select: none;
    cursor: pointer;
    border: 1px solid gray;
  }
  .cardw img {
    position: absolute;
    width: 50%;
    bottom: 0;
    right: 0;
    user-select: none;
  }
  .card-textw {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    padding-left: 50px;
  }
  .card-textw h3 {
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .card-textw span {
    font-size: 18px;
    color: tomato;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 20px;
  }
  .card-textw p {
    font-size: 18px;
    color: gray;
  }
  .links {
    margin-top: 30px;
  }
  .links a {
    display: inline-block;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    color: gray;
    background-color: #ececec;
    border-radius: 50%;
    margin: 0 3px;
    transition: .5s;
  }
  .links a:hover {
    color: white;
    background-color: tomato;
  }
  /* .store {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: 30px;
    color: rgb(167, 167, 167);
    font-weight: 500;
  
  } */
  </style>