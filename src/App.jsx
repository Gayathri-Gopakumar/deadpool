
import './App.css';
import Imagegrid from './Imagegrid';
import deadpoolWolverineName from './assets/deadpoolandwolverine_name.png'; // Import image for better handling
import backgroundImage from './assets/deadpoolandwolverine_lob_mas_dsk_02.jpg';
import MarvelList from './MarvelList';
import Relatedmovies from './Relatedmovies';
import Footer from './Footer';


function App() {
  return (
    <div style={{ minHeight: '100vh' }} className="bg-light">
      <h1 style={{fontSize:'60px'}} className="text-center text-danger ">
        DEADPOOL <span className="text-dark">&</span>{' '}
        <span className="text-warning">WOLVERINE</span>
      </h1>
      <ul className='d-flex justify-content-evenly align-items-center '>
        <li style={{listStyle:'none',cursor:'pointer'}} className='text-danger fs-4 fw-bold'>Tickets</li>
        <li style={{listStyle:'none',cursor:'pointer'}} className='text-danger fs-4 fw-bold'>Trailer</li>
        <li style={{listStyle:'none',cursor:'pointer'}} className='text-danger fs-4 fw-bold'>Posters</li>
        <li style={{listStyle:'none',cursor:'pointer'}} className='text-danger fs-4 fw-bold'>Marvel Legacies</li>
        <li style={{listStyle:'none',cursor:'pointer'}} className='text-danger fs-4 fw-bold'>Follow us on</li>
      </ul>

      {/* Container for the two images to align them side by side */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: '5px' }}>
        <img
          src={deadpoolWolverineName}
          alt="Deadpool and Wolverine Name"
          style={{
            width: '50%', // Adjust the width as needed to fit the combined image
            height: '70%',
            // zIndex:'2',
            marginLeft:'-50%',
            position:'absolute'
          }}
        />
        <img
          src={backgroundImage}
          alt="Deadpool and Wolverine Background"
          style={{
            width: '100%', // Adjust the width as needed to fit the combined image
            height: 'auto',
            // zIndex:'1'
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="btn btn-danger m-5"
        >
          GET TICKETS
        </button>
      </div>

      {/* <h2 className="fw-bolder m-5 text-center" style={{ fontSize: '30px' }}>
        OFFICIAL TRAILER
      </h2> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="60%"
          height="500"
          src="https://www.youtube.com/embed/73_1biulkYk"
          title="Deadpool & Wolverine | Official Trailer | In Theaters July 26"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <Imagegrid />
      <MarvelList/>
      <Relatedmovies/>
      <Footer/>
    </div>
  );
}

export default App;


