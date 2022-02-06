import React from 'react'
import clsx from 'clsx'
import styles from './hashtag.module.scss'

interface IHashtag {
  cover: string
  id: string
  name: string
  title: string
}

interface IHashtagProps {
  hashtag: IHashtag
  className?: string
}

const Hashtag = function Hashtag({
  hashtag,
  className
}: IHashtagProps): JSX.Element {
  return (
    <div className={clsx(styles.hashtag, className)} role='link'>
      <span>{hashtag.name}</span>
    </div>
  )
}

export default Hashtag
