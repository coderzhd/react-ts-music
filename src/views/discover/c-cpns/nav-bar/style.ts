import styled from 'styled-components'
import theme from './../../../../assets/theme/index'

export const NavWrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.color.primary};
  .top {
    ${(props) => props.theme.mixin.wrapv1}
    .item-list {
      display: flex;
      justify-content: space-between;
      padding-left: 180px;
      width: 764px;
      text-align: center;
      .nav-item {
        display: inline-block;
        height: 20px;
        font-size: 12px;
        padding: 0 13px;
        margin: 4px 17px 0;
        border-radius: 20px;
        color: #fff;
        line-height: 20px;
        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
        }
      }
    }
  }
`
