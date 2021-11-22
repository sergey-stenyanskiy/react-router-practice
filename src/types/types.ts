export type ImageType = {
  id: number
  url: string
}

export type ImageData = Partial<ImageType>

export type ViewModelState = ImageType[]

export type ViewModelActions = {
  setImage: (id: number, data: ImageData) => void
  getImage: (id: number) => void
  setImages: React.Dispatch<React.SetStateAction<ViewModelState>>
  fetchImages: () => void
}

export type ViewModel = {
  images: ViewModelState,
  loaded: boolean
  actions: ViewModelActions
}
