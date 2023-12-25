import React, { useState } from 'react'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  let data = [
    {
      name: "Sale Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: true,
      rating: false,
    },
    {
      name: "Fancy Product",
      options: "View",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: false,
      rating: false,
    },
    {
      name: "Special Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: true,
      rating: true,
    },
    {
      name: "Popular Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: false,
      rating: true,
    },
    {
      name: "Sale Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: true,
      rating: false,
    },
    {
      name: "Popular Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: false,
      rating: true,
    },
    {
      name: "Fancy Product",
      options: "View",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: false,
      rating: false,
    },
    {
      name: "Special Item",
      options: "Add",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale: true,
      rating: true,
    },
  ];
  let [cartCount, setCount] = useState(0); //0 is initial value

  return (
    <>
      <Topbar cartCount={cartCount} setCount={setCount} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e, i) => {
                return <Card data={e} key={i} cartCount={cartCount} setCount={setCount} />;
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App