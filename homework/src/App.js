
import { Message } from './components/Message';

const text = 'Walking, running, cycling and playing football are some kinds of sports that you do every day. Some people think that doing sports is useless, the other consider that it is tiring. So, why is it so important to do sports?When you move, 600 muscles in your body work to make you more flexible and stronger. Sports are very important for children and teenagers. When their bones are well held by the muscles, they grow and become stronger.'

const App = () => {
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;


