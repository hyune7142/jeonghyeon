import { H1 } from '@/components/common/Typography';

import styles from './page.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <H1>Welcome to the JoengHyeon Portfolio</H1>
      </div>
    </div>
  );
}

export default Home;
