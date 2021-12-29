import React from 'react';
import { FileDrop } from 'react-file-drop';
import './DropZone.css';
import * as BsIcons from 'react-icons/bs'

export const DropZone = () => {
    const files = '';
  return (
    <div>
        <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => console.log('onDrop!', files, event)}
        >
          <BsIcons.BsImages /> <br /> <p className="titleDropZone">Fais glisser tes photos et vidéo</p>
        </FileDrop>
    </div>
  );
};
export default DropZone;