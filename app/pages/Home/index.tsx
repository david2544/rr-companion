import React, { useState } from 'react';
import useToggleLocale from '@app/hooks/useToggleLocale';
import styles from './styles.module.scss';

const Home: React.FC = () => {
  const [hovered, setHovered] = useState('');
  const { locale, toggleLocale } = useToggleLocale();

  return (
    <div className={styles.home}>
      <h1>React TS Boilerplate</h1>
    </div>
  );
};

export default Home;
