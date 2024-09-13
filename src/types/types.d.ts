export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
  likes: number;
  description?: string;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface ErrorMessageProps {
  message: string;
}

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description?: string;
}

export interface FetchImagesResult {
  images: Image[];
  hasMore: boolean;
}
