import './App.css';
import { Link,Route ,Routes , BrowserRouter } from 'react-router-dom';
import Details from './Details';
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query';
import SearchParam from './SearchParam';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <header>
      <Link to="/">Adopt Me</Link>
    </header>
    <h1>Adopt Me</h1>
      <Routes>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/" element={<SearchParam/>} />
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
