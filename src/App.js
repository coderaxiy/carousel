import './App.css';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <h2 className='title'>Carousel</h2>
        <Carousel infinite>
          <img src='https://www.dulichhoanmy.com/Upload/images/stories/vong_quanh_nuoc_my/canada/2020/du-lich-canada-di-giua-thu-vang-2.jpg' alt='rasm' /> 
          <div className='slideItem'>Second Slide</div>
          <img src='https://grrmet.com/wp-content/uploads/2021/08/di-du-lich-canada-vao-mua-rung-thu-thay-la-lang-man-du-lich-canada-mua-thu-2-ottawa-4_bp1.jpg' alt='rasm' />
          <img src='https://static01.nyt.com/images/2021/07/19/travel/22The-world-through-canada-5/oakImage-1626708139861-mediumSquareAt3X.jpg' alt='rasm' />
        </Carousel>
    </div>
  );
}

export default App;
