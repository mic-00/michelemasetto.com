import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';


const imageViewerStore = configureStore({
  reducer: reducer
});
export default imageViewerStore;