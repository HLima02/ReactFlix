import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;

  .bg-vertical {
    height: inherit;
    width: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
    .bg-horizontal {
      height: inherit;
      width: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-top: 70px;
      padding-bottom: 100px;

      .name {
        font-size: 60px;
        font-weight: bold;
      }

      .movie-infos {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        span {display: inline-block; margin-right: 15px;}
        .points {color: #46d369;}
      }
      .desciption {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
      }
      .movie-btn{
        margin-top: 15px;
        a.watch, a.my-list {
          display: inline-block;
          font-size: 20px;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 5px;
          text-decoration: none;
          margin-right: 10px;
          opacity: 1;
          transition: 0.3s all ease-in;
        }

        a.watch:hover, a.my-list:hover {
          opacity: 0.7;
        }

        .watch {
          background-color: #fff;
          color: #000;
        }

        .my-list {
          background-color: #333;
          color: #fff;
        }
      }

      .genres {
        margin-top: 15px;
        font-size: 18px;
        color: #999;
      }
    }
  }

  @media only screen and (max-width: 760px) {
    height: 90vh;
    .bg-vertical {
      .bg-horizontal {
        .name {font-size: 35px;}

        .movie-infos {font-size: 15px;}
        .desciption {
          margin-right: 30px;
          font-size: 14px;
          max-width: 100%;
        }
        .movie-btn{
          a.watch, a.my-list {
            font-size: 16px;
            padding: 10px 20px;
          }
        }

        .genres { font-size: 14px; }
      }
    }
  }
`;