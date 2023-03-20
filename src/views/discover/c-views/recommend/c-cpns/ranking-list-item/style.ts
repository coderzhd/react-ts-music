import styled from 'styled-components'

export const RankingListItemWraper = styled.div`
  width: 230px;
  &:last-of-type {
    width: 228px;
  }
  .item-header {
    display: flex;
    height: 100px;
    padding: 20px 0 0 19px;
    .header-left {
      position: relative;
      height: 80px;
      .msk {
        background-position: -145px -57px;
      }
    }
    .header-right {
      width: 116px;
      margin: 6px 0 0 10px;
      .item-name > span {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: bold;
      }
      .item-oper {
        margin-top: 10px;
        display: flex;
        .c-wh {
          width: 22px;
          height: 22px;
        }
        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            background-position: -267px -235px;
          }
        }
        .favourite {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }
  .item-content {
    padding-left: 10px;
    margin-top: 20px;
    .list-item {
      display: flex;
      height: 32px;
      line-height: 32px;

      &:nth-child(-n + 3) .number {
        color: #c10d0c;
      }

      .number {
        width: 35px;
        text-align: center;
      }
      .song-name {
        width: 185px;
        font-size: 12px;
      }

      &:hover .song-name {
        width: 92px;
        text-decoration: underline;
      }

      &:hover .oper {
        visibility: visible;
        width: 93px;
      }

      .oper {
        display: flex;
        align-items: center;
        visibility: hidden;
        width: 0;
        text-indent: -9999px;

        .btn {
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favourite {
          background-position: -297px -268px;
        }
      }
    }
  }
  .item-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 32px;
    .show-all {
      margin-right: 32px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
