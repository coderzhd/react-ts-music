import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #333;
  .content {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}
  }
  .red-devide {
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: inline-block;
    width: 177px;
    height: 69px;
    /* 覆盖sprite_01中的background */
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list {
    display: flex;
    font-size: 14px;
    .header-item {
      position: relative;
      padding: 0 19px;
      text-align: center;
      line-height: 70px;
      color: #ccc;
      &:hover {
        background-color: #000;
        text-decoration: none;
        color: #fff;
      }
      :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -192px 0;
          top: 20px;
          right: -20px;
        }
      }
    }
    .active {
      background-color: #000;
      text-decoration: none;
      color: #fff;
    }
    .active .icon {
      position: absolute;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ccc;
  width: 337px;
  .header-input {
    margin-top: 19px;
    width: 158px;
    height: 32px;
    font-size: 12px;
    color: #9b9b9b;
    border-radius: 32px;
  }
  .header-center {
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 15px;
    border: 1px solid #4f4f4f;
    line-height: 31px;
    font-size: 12px;
    color: #787878;
    border-radius: 20px;
    :hover {
      border-color: #ccc;
      color: #ccc;
    }
  }
  .header-login {
    height: 32px;
    margin: 25px 0 0 20px;
    padding: 0 22px 0 0;
    a {
      font-size: 12px;
      color: #787878;
      :hover {
        color: #ccc;
      }
    }
  }
`
