import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '28px auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Typography.Title style={{ textAlign: 'center', fontSize: 32 }}>TODO APP with REDUX TOOLKIT</Typography.Title>
      <Filters />
      <Divider />
      <TodoList />
    </div >
  );
}

export default App;
