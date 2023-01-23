import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Faqih',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sonia',
      email: 'sonia@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;