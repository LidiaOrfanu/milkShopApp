import '../styles/Home.css'
import pic from '../assets/milk.png'
import { IStoreProps } from '../types/interfaces'

const Home = ({ data, store }: IStoreProps) => {
  return (
    <section className='products-container'>
      <h5 className='product-storage'>{data.length} products</h5>
      <section className='card-container'>
        {store.map((milk) => (
              <section className='milk'>
                <img src={ pic } alt='milk-pic' className='milk-pic'/>
                  <div className='milk-info'>
                    <p className='milk-name'>{milk.name}</p>
                      <div className='milk-details'>
                        <p className='milk-type'>{milk.type}</p>
                        <p className='milk-storage'>{milk.storage} liters</p>
                      </div>
                  </div>
            </section>
        ))}
      </section>
    </section>
  )
}

export default Home