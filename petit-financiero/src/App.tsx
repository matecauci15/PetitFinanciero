// // App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home.tsx';
// import Article from './Pages/Article.tsx';

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/article/:id" element={<Article />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Article from './Pages/Article.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;