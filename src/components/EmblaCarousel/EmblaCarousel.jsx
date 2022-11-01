import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './EmblaCarousel.module.css'
import prevIcon from '../../assets/icons/icon-previous.svg'
import nextIcon from '../../assets/icons/icon-next.svg'

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className={styles.embla__button + ' ' + styles.embla__button__prev}
    onClick={onClick}
    disabled={!enabled}
  >
    <img src={prevIcon} alt="next" />
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className={styles.embla__button + ' ' + styles.embla__button__next}
    onClick={onClick}
    disabled={!enabled}
  >
    <img src={nextIcon} alt="next" />
  </button>
)

const EmblaCarousel = ({ images }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    embla.on('reInit', onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {images.map((image, index) => (
            <div className={styles.embla__slide} key={index}>
              <img
                className={styles.embla__slide__img}
                src={image}
                alt="Embla carousel"
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}
export default EmblaCarousel
