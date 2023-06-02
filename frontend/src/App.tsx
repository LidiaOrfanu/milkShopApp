import React, { useEffect, useState } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { IMilkProdInfo } from './types/interfaces';
import { fetchProducts } from './services/api';
import Header from './components/Header';
import Home from './components/Home';
import Pagination from './components/Pagination';
import Dropdown from './components/Dropdown';
import SearchMilk from './components/SearchMilk';

function App() {
  const [data, setData] = useState<IMilkProdInfo[]>([
    {
      name: '',
      type: '',
      storage: 0,
      prodId: '',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [milkPerPage] = useState(6);
  const [searchMilk, setSearchMilk] = useState('');
  const [milkType, setMilkType] = useState('');

  useEffect(() => {
    const getShopData = async () => {
      const response = await fetchProducts();
      setData(response);
    };
    getShopData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMilk(e.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMilkType(e.target.value);
    setCurrentPage(1); // Reset current page when category changes
  };

  const pag = (pageNumber: number) => setCurrentPage(pageNumber);

  const filteredData = data.filter((milk) => {
    const isNameMatch = milk.name.toLowerCase().includes(searchMilk.toLowerCase());
    const isTypeMatch = milkType === '' || milk.name.toLowerCase().includes(milkType.toLowerCase());
    return isNameMatch && isTypeMatch;
  });

  const totalMilk = filteredData.length;
  const indexLastMilk = currentPage * milkPerPage;
  const indexFirstMilk = indexLastMilk - milkPerPage;
  const currentMilk = filteredData.slice(indexFirstMilk, indexLastMilk);

  return (
    <div className="App">
      <Header />
      <section className="nav">
        <SearchMilk onChange={handleSearchChange} value={searchMilk} />
        <Dropdown onChange={handleCategoryChange} value={milkType} />
      </section>
      <Home store={currentMilk} data={data} />
      <Pagination totalMilk={totalMilk} milkPerPage={milkPerPage} pagination={pag} />
    </div>
  );
}

export default App;
