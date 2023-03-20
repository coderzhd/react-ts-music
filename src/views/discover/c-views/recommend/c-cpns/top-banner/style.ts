import styled from 'styled-components'

export const BannerWraper = styled.div`
  background-size: 6000px;
  background-position: center center;
  .banner {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`

export const BannerLeft = styled.div`
  height: 270px;
  width: 730px;
  img {
    width: 730px;
    height: 100%;
  }
  .banner-dot {
    li button {
      width: 8px;
      height: 8px;
      border-radius: 8px;
      :hover {
        background: ${(props) => props.theme.color.primary};
      }
    }
    li.slick-active {
      width: 16px;
    }
    li.slick-active button {
      background: ${(props) => props.theme.color.primary};
    }
  }
`

export const BannerRight = styled.a.attrs({
  // href: 'https://music.163.com/#/download',
  href: 'https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe',
  target: '_blank'
})`
  width: 250px;
  background: url(${require('@/assets/img/download.png')});
`

export const BannerControl = styled.div`
  position: absolute;
  /* 水平居中 */
  left: 0;
  right: 0;
  margin: 0 auto;
  /* 垂直居中 */
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
