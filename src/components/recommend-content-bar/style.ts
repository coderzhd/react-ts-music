import styled from 'styled-components'
import { Button } from 'antd'

export const BarWraper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
`
export const BarLeft = styled.div`
  display: flex;
  .title {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    a {
      color: #333333;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .categorys {
    display: flex;
    margin-left: 20px;
    margin-bottom: 0;
    color: #ccc;
    line-height: 30px;
    .item {
      .line {
        margin: 0 10px;
      }
      &:last-child {
        .line {
          display: none;
        }
      }
    }
  }
`
export const BarRight = styled.div`
  display: flex;
  align-items: center;
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    background-position: 0 -240px;
  }
`
