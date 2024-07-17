import React from 'react';
import MainFooter from '../../../components/MainFooter';
import MainNav from '../../../components/Other/HeaderNav/MainNav';
import ProductCard from '../../../components/Product/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { BgColorsOutlined, HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { sampleProducts } from '../../../utils/sampleProducts.utils';
const pageSaved = () => {


  return (
    <>
      <div className='bg-white pb-28'>
        <MainNav />
        <main className='lg:px-20 p-1 mt-6'>
          <section className=' bg-url  flex justify-center items-center rounded-lg   p-0'>
            <div className="flex flex-col gap-8 text-center py-6 rounded-lg   bg-gray-100/80  w-full justify-center h-[100%] ">
              <div className="flex flex-col gap-2 text-center">
                <div className="text-lg  font-bold text-black">
                  <h1>Saved products</h1>
                </div>
                <div className="text-gray-400">
                  <p>4 saved</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4    gap-3 items-center ">
              {
                sampleProducts?.map(product => (
                  <div className="rounded-lg overflow-hidden border shadow-sm min-h-[200px] bg-white" key={product.id}>
                    <Link href={`/product/${product?.id}`}>
                      <div className="relative w-full h-48"> {/* Adjust height as needed */}
                        <Image
                          src={product?.thumbnail[0] ?? '/images/33c1ef9e9a57ac68ee296e0b09c603da.png'}
                          alt={product?.name}
                          fill
                          style={{ objectFit: 'contain' }}
                          className="absolute inset-0 w-full -z-0"
                        />
                      </div>
                    </Link>
                    <div className="p-4 flex lg:flex-row gap-6 flex-col justify-between">
                      <Link href={`/product/${product?.id}`}>
                        <p className="text-gray-700 font-semibold">{product?.name}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-primary-lightgreen font-bold uppercase">
                            {product?.unitPrice} {product?.createdBy?.currency}
                          </span>
                          
                            <span className="text-gray-400 line-through uppercase">
                              {product?.originalPrice} {product?.createdBy?.currency}
                            </span>
                         
                        </div>
                      </Link>
                      <div className="flex items-center gap-3 justify-between">
                         
                          <button className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                            <ShoppingCartOutlined />
                          </button>
                       
                        <button className="flex items-center text-primary-lightgreen  justify-center w-10 h-10 border border-gray-200 rounded-lg hover:bg-gray-100">
                          <HeartFilled className='fill-primary-lightgreen'  />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        </main>
      </div>
      <MainFooter />
    </>
  );
}

export default pageSaved;
