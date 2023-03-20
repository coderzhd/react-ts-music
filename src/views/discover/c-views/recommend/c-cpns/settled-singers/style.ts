import styled from 'styled-components'

export const SettledSingersWraper = styled.div`
  width: 248px;
  padding-top: 15px;
  .singer-list {
    margin-top: 6px;
  }
  .singer-item {
    height: 62px;
    width: 210px;
    margin: 0 auto;
    margin-top: 14px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    background: #fafafa;
    /* border: 1px solid #e9e9e9; */
    .item-img {
      width: 62px;
      height: 62px;
    }
    .item-info {
      width: 148px;
      height: 62px;
      padding-left: 14px;
      border: 1px solid #e9e9e9;
      border-left: none;
      span {
        display: block;
      }
      .singer-name {
        margin-top: 8px;
        font-size: 14px;
        font-weight: bold;
      }
      .singer-info {
        width: 90%;
        margin-top: 8px;
        font-size: 12px;
        color: #666;
      }
    }
  }
  .s-footer {
    display: inline-block;
    margin-left: 20px;
    padding: 0 2px 0 0;
    background-position: right -100px;
    .s-footer-i {
      display: block;
      margin: 0 auto;
      width: 205px;
      height: 31px;
      line-height: 31px;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      background-position: 0 -59px;
      padding: 0 15px 0 20px;
    }
  }
`
