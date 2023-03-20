import styled from 'styled-components'

export const SingerAnchorBarWraper = styled.div`
  width: 210px;
  height: 24px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  .left {
    font-weight: bold;
  }
  .right {
    color: #666;
    cursor: pointer;
    &:hover {
      color: #333;
      text-decoration-line: underline;
    }
  }
`
