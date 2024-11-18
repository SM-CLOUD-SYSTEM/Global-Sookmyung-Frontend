import { Outlet } from 'react-router-dom';

import { Header } from '@components';

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.app}>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
