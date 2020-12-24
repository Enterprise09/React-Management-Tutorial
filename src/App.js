import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer=[
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '021547',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '임꺽정',
    'birthday': '021654',
    'gender': '남자',
    'job': '도둑씨'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '심청이',
    'birthday': '012457',
    'gender': '여자',
    'job': '대학생'
  }
]


function App() {
  return (
    <div>
      {
        customer.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.name}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
