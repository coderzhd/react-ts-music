import styled from 'styled-components'

export const PlaySongBarWraper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-content: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 47px;
  }
`
interface IControl {
  isPlaying: boolean
}
export const Contorl = styled.div<IControl>`
  display: flex;
  align-items: center;

  .prev,
  .next,
  .play {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    /* 动态的传递 */
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    margin-top: 0;

    &:hover {
      /* 动态的传递 */
      background-position: -40px
        ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;
      .song-name {
        font-size: 12px;
      }
      .singer-name {
        font-size: 12px;
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -6px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }
      }

      .time {
        span {
          font-size: 12px;
        }
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`
interface IOperator {
  playMode: number
}
export const Operator = styled.div<IOperator>`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }
  .left {
    display: flex;
    align-items: center;
    width: 50px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
      &:hover {
        background-position: ${(props) => {
          switch (props.playMode) {
            case 1:
              return '-93px -248px'
            case 2:
              return '-93px -344px'
            default:
              return '-33px -344px'
          }
        }};
      }
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
