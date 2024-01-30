import {Provider} from "react-redux";
import imageViewerStore from 'components/ImageViewer/store';
import ImageViewerControlsContent from "./ImageViewerControlsContent";

function ImageViewerControls() {

  return (
    <Provider store={imageViewerStore}>
      <ImageViewerControlsContent />
    </Provider>
  );
}

export default ImageViewerControls;
