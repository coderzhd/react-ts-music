import styled from 'styled-components'

interface IProps {
  width: number
  size: number
  bgp: string
}

export const AlbumCoverWrapper = styled.div<IProps>`
  width: ${(props) => props.width + 'px'};
  font-size: 12px;

  .album-image {
    position: relative;
    height: ${(props) => props.size + 'px'};
    margin-top: 15px;
    text-indent: -9999px;
    background-position: 0 ${(props) => props.bgp};
  }

  .album-name {
    width: ${(props) => props.size};
    color: #000;
  }

  .artist {
    color: #666;
  }
`
