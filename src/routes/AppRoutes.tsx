import { Routes, Route } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';

/* Products */
import Products from '../components/products/Products';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products/' element={<Products/>} />
        </Routes>
    );
}
export default AppRoutes;