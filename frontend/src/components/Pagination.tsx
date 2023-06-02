import '../styles/Pagination.css'

interface IPageProps {
    totalMilk: number,
    milkPerPage: number,
    pagination: Function,
  }

const Pagination = ({totalMilk, milkPerPage, pagination}: IPageProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMilk / milkPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul className='pagination-list'>
        {pageNumbers.map(number => (
          <a href='!#'><li key={number} className='pagination-item' onClick={()=> pagination(number)}>
            {number}</li></a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination