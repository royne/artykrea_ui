import styled from "@emotion/styled"

export const SectionHome = styled.section`
  width: 100%;
  height: calc(100vh - 160px);
  margin-top: 170px;
  padding: 2% 5%;
  display: flex;
  box-sizing: border-box;
  .home_section {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .home_info {
    width: 30%;
    align-items: flex-start;
    padding-left: 5%;
    & > img {
      width: 100%;
    }
    & > h5 {
      font-size: 2.5rem;
      color: #c23c57;
      font-weight: normal;
    }
  }
  .home_img {
    width: 70%;
    align-items: center;
    & > img {
      max-width: 70%;
    }
    .box_imgs {
      position: relative;
      & > span {
        position: absolute;
        top: 25%;
        left: 75%;
        width: 170px;
        font-size: 2rem;
        font-family: absolute;
      }
    }
    .img_principal {
      transform: scaleX(-1);
    }
    .label_img {
      position: absolute;
      top: 20%;
      left: 55%;
      width: 80%;
    }
    .img_spin {
      position: absolute;
      width: 150%;
      bottom: 0;
      left: 0;
      transform: translateX(-20%);
      z-index: -1;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  height: calc(100vh - 160px);
  background: #${(props) => props.bg};
  .box_section {
    display: flex;
    flex-wrap: wrap;
    padding: 2% 5%;
    box-sizing: border-box;
    justify-content: ${(props) => props.resourceType === "category" ? "space-around" : "space-between"};
    align-items: center;
  }
  & > h2 {
    padding-left: 5%;
    padding-top: 2%;
    font-size: 2.2rem;
    font-weight: normal;
    font-family: agency;
  }
`;

