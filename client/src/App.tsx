import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import YellowPagesSearch from './components/YellowPagesSearch.tsx';
import './App.css';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <YellowPagesSearch />
      </div>
    </QueryClientProvider>
  );
};

export default App;
