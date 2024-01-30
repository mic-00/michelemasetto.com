
import {Provider} from "react-redux";
import imageViewerStore from 'components/ImageViewer/store';
import ImageViewerContent from "./ImageViewerContent";

function ImageViewer(data) {

  return (
    <Provider store={imageViewerStore}>
      <ImageViewerContent { ...data } />  
    </Provider>
  );
}

export default ImageViewer;
