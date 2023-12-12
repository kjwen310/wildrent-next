'use client';

import { ReactElement, FC, useState, useEffect, useCallback } from 'react';
import { Button } from '../ui/button';

interface ModalProps {
  title: string,
  isOpen?: boolean,
  body?: ReactElement,
  footer?: ReactElement,
  disabled?: boolean,
  actionLabel: string,
  secondaryActionLabel?: string,
  onClose: () => void,
  onSubmit: () => void,
  secondaryAction?: () => void,
}

const Modal: FC<ModalProps> = ({
  title,
  isOpen,
  body,
  footer,
  disabled,
  actionLabel,
  secondaryActionLabel,
  onClose,
  onSubmit,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
          fixed
          flex
          items-center
          justify-center
          overflow-x-hidden
          overflow-y-auto
          inset-0
          z-50
          outline-none
          bg-neutral-800/70
          focus:outline-none
        "
      >
        <div
          className="
            relative
            w-full
            h-full
            mx-auto
            my-6
            md:w-4/6
            md:h-auto
            lg:w-3/6
            xl:w-2/5
          "
        >
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div
              className="
                relative
                w-full
                h-full
                flex
                flex-col
                bg-white
                outline-none
                border-0
                rounded-lg
                shadow-lg
                md:h-auto
                focus:outline-none
              "
            >
              {/* header */}
              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  border-b-[1px]
                  rounded-t
                  p-6
                "
              >
                <button
                  onClick={handleClose}
                  className="
                    absolute
                    left-9
                    border-0
                    transition
                    p-1
                    hover:opacity-70
                  "
                >
                  X
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/* body */}
              <div
                className="
                  relative
                  flex-auto
                  p-6
                "
              >
                {body}
              </div>
              {/* footer */}
              <div
                className="
                  flex
                  flex-col
                  gap-2
                  p-6
                "
              >
                <div
                  className="
                    w-full
                    flex
                    flex-row
                    items-center
                    gap-4
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button onClick={handleSecondaryAction}>
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button onClick={handleSubmit}>
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
