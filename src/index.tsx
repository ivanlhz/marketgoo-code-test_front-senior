import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from '@/components/App'

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);

const socket = socketIOClient(ENDPOINT);
socket.on('update/players', (data) => {
    console.log(data);
});
