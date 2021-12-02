import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 30px;
  h2 { padding-left: 30px; }

  .arrow-left, .arrow-right {
    position: absolute;
    width: 42px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: 0.4s all ease;
  }

  .arrow-left { left: 0;}

  .arrow-right {right: 0;}

  .movieRowArea {
    overflow: hidden;
    padding-left: 30px;
    
    .movieRowList {
      transition: all ease 0.5s;
      .movieRowItem {
        display: inline-block;
        width: 200px;
        img {
          transform: scale(0.9);
          cursor: pointer;
          width: 100%;
          transition: all ease 0.3s;
        }
        img:hover {
          transform: scale(1);
        }
      }
    }
  }

  @media only screen and (max-width: 760px) {
    .arrow-left, .arrow-right {
      opacity: 1;
    }
  }
`;