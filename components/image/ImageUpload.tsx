'use client';

import { FC, useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { FilePlus } from 'lucide-react';
import useImageUpload from '@/hooks/useImageUpload';

declare global {
  var cloudinary: any;
};

interface ImageUploadProps {
  value: string,
  onChange: (value: string) => void,
}

const ImageUpload: FC<ImageUploadProps> = ({
  value,
  onChange,
}) => {
  const imageUpload = useImageUpload();
  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
  }, [onChange]);

  return (
    <div className="relative z-[1000]">
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset="d4z4b2g1"
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation()
                open?.()
              }}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                text-neutral-600
                relative
                border-dashed
                border-2
                border-neutral-300
                transition
                cursor-pointer
                p-20
                hover:opacity-70
              "
            >
              <FilePlus size={24} />
              <div className="font-semibold text-lg">
                點選上傳照片
              </div>
              {value && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    alt="upload"
                    fill
                    className="object-cover"
                    src={value}
                  />
                </div>
              )}
            </div>
          )
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload
