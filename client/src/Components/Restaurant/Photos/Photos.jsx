import React,{useState} from 'react';
import ImageViewer from 'react-simple-image-viewer'

//component
import PhotoCollection from './PhotoCollection';


function Photos() {
    const [photos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/2/19080732/b2d904948f3e49894f94aa3c43e77389.jpeg",
        "https://b.zmtcdn.com/data/pictures/chains/2/19080732/209e552d480dd9ea9440f973cbb16ce4.jpeg",
        "https://b.zmtcdn.com/data/pictures/chains/2/19080732/209e552d480dd9ea9440f973cbb16ce4.jpeg",
        "https://b.zmtcdn.com/data/reviews_photos/918/e5f152ca232ec5fbc3cfb439acb30918_1574867416.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/000/f5df1b5683ece41c8f2fa99f819ee000_1574770652.jpg",
        "https://b.zmtcdn.com/data/reviews_photos/c21/e5efa2f8058ccbb87bcc9be7108c7c21_1568823051.jpg",
    ]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
    )
}

export default Photos;


