import React from 'react';
import clsx from 'clsx';
import styles from './logotype.module.scss';

interface ILogotypeProps {
  className?: string;
}

const Logotype = function Logotype({ className }: ILogotypeProps): JSX.Element {
  return (
    <p className={clsx(styles.logotype, className)} role="img">
      Tik Tuk
    </p>
  );
};

export default Logotype;
