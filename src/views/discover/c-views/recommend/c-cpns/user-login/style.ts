import styled from 'styled-components'

export const UserLoginWraper = styled.div`
  width: 248px;
  .login-content {
    height: 126px;
    background-position: 0 0;
    .login-text {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      font-size: 12px;
      color: #666;
    }
    .login-btn {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 31px;
      background-position: 0 -195px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-position: -110px -195px;
      }
    }
  }
`
