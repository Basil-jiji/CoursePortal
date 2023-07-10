import { v4 as uuidv4 } from 'uuid'
uuidv4()

const reviews = [
  {
    id: uuidv4(),
    name: 'Arun',
    review: 'Best JavaScript Course',
    image: '/images/js.jpg',
    description:
      'Javascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    featured: true,
    rating: '5',
  },
  {
    id: uuidv4(),
    name: 'Amal',
    review: 'Python course is cool',
    image: '/images/python.jpg',
    description:
      'Python is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    featured: true,
    rating: '4',
  },
  {
    id: uuidv4(),
    name: 'Abhijith',
    review: 'Php is nyz',
    image: '/images/php.jpg',
    description:
      'Php is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    featured: true,
    rating: '3',
  },
  {
    id: uuidv4(),
    name: 'Abhinav',
    review: 'Average',
    image: '/images/java.jpg',
    description:
      'Java is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    featured: true,
    rating: '3',
  },
  {
    id: uuidv4(),
    name: 'Amal',
    review: 'Nyz Course',
    image: '/images/c.jpg',
    description:
      'C is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    featured: true,
    rating: '5',
  },
]

export default reviews
