import React, { useCallback, useMemo, useState } from 'react'

import { ImageType, ImageData, ViewModel, ViewModelState, ViewModelActions } from './types/types'

import axios from 'axios'

type ViewModelOptions = {
  initialState: ViewModelState
  url: string
}

export default function useViewModel({
  initialState,
  url
}: ViewModelOptions): ViewModel {
  const [images, setImages] = useState(initialState);
  const [loaded, setLoaded] = useState(false);

  const fetchImages = useCallback(async () => {
    const res = await axios.get(url, {
      headers: {
        'content-type': 'application/json'
      }
    });

    setImages(res.data);

    setLoaded(true);
  }, [url]);

  const setImage = useCallback((id: number, data: ImageData) => {
    setImages((imgs) => {
      return imgs.map((img) => {
        if (img.id === id) {
          return {
            ...img,
            ...data
          };
        }

        return img;
      });
    });
  }, []);

  const getImage = useCallback((id: number): ImageType | null => {
    return images.find((img) => id === img.id) ?? null;
  }, [images]);

  return {
    images,
    loaded,
    setImage,
    getImage,
    setImages,
    fetchImages
  }
}