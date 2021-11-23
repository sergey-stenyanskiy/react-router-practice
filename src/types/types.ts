export type ImageType = {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

export type ImageData = Partial<ImageType>

export type ViewModelState = ImageType[]

export type ViewModelActions = {
  setImage: (id: number, data: ImageData) => void
  getImage: (id: number) => ImageType | null
  setImages: React.Dispatch<React.SetStateAction<ViewModelState>>
  fetchImages: () => void
}

export type ViewModel = {
  images: ViewModelState
  loaded: boolean
} & ViewModelActions

export type FilledButtonVariant = 'grey' | 'primary' | 'danger';

export type FilledButtonVariantColorsType = {
  grey: '#616161'
  danger: '#EF5350'
  primary: '#42A5F5'
}

export type FilledButtonTheme = {
  color: FilledButtonVariant
}