import styled from 'styled-components'
export const HotAnchorWraper = styled.div`
  width: 248px;
  margin-top: 30px;
  .anchor-list {
    padding-top: 15px;
    .anchor-item {
      height: 50px;
      width: 210px;
      margin: 0 auto;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;

      .anchor-intro {
        width: 160px;
        height: 42px;
        padding: 5px 0 0 10px;
        .anchor-h {
          height: 22px;
          line-height: 22px;
        }
        .anchor-info {
          color: #666;
        }
      }
    }
  }
`
