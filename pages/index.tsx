import type { NextPage } from 'next';
import 'normalize.css';
import { useActions, useTypedSelector } from '../hooks';

const Home: NextPage = () => {
  const { redux } = useTypedSelector((state) => state.ui);
  const { openModal, closeModal } = useActions();
  console.log(redux);

  return (
    <div>
      <div
        style={{
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <div
          style={{
            width: '90vw',
            maxWidth: '500px',
            border: '1px solid gray',
            borderRadius: '5px',
          }}
        >
          <h1> NextJs app...</h1>
          <h2>Hello World!</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
