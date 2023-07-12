import { v4 as uuidv4 } from 'uuid'
uuidv4()

const courses = [
  {
    id: uuidv4(),
    name: 'JavaScript',
    image: '/images/js.jpg',
    description:
      'Javascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
    featured: true,
    rating: '5',
  },
  {
    id: uuidv4(),
    name: 'Python',
    image: '/images/python.jpg',
    description:
      'Python is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    featured: true,
    rating: '4',
  },
  {
    id: uuidv4(),
    name: 'Php',
    image: '/images/php.jpg',
    description:
      'Php is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    featured: false,
    rating: '3',
  },
  {
    id: uuidv4(),
    name: 'Java',
    image: '/images/java.jpg',
    description:
      'Java is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    featured: false,
    rating: '3',
  },
  {
    id: uuidv4(),
    name: 'C',
    image: '/images/c.jpg',
    description:
      'C is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam avascript is sit amet.',
    featured: false,
    rating: '1',
  },
]

export default courses
