import { create } from 'zustand';

interface ImageUploadStore {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
}

const useImageUpload = create<ImageUploadStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useImageUpload;
