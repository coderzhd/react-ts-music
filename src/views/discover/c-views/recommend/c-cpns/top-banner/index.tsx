import React, { memo, useRef, useState, useCallback } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'

import { useAppSeletor } from './../../../../../../store/index'
import { BannerWraper, BannerLeft, BannerRight, BannerControl } from './style'

interface IProps {
  children?: ReactNode
}
const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { banners } = useAppSeletor((state) => ({
    banners: state.recommend.banners
  }))
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const changeIndex = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])

  const bgimageUrl =
    banners &&
    banners[currentIndex] &&
    banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWraper
      style={{
        background: `url('${bgimageUrl}') center center / 6000px `
      }}
    >
      <div className="banner w980">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            autoplaySpeed={3000}
            speed={800}
            autoplay={true}
            effect="fade"
            dots={{ className: 'banner-dot' }}
            beforeChange={changeIndex}
          >
            {banners.map((item) => {
              return (
                <div className="item" key={item.imageUrl}>
                  <img
                    src={item.imageUrl + '?imageView&quality=89'}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current?.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current?.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWraper>
  )
}

export default memo(TopBanner)
