'use client';

import { ReactElement, FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
interface ModalProps {
  title: string,
  description: string;
  isOpen?: boolean,
  body?: ReactElement,
  divider?: ReactElement,
  footer?: ReactElement,
  bodyClassName?: string;
  onClose: () => void,
}

const Modal: FC<ModalProps> = ({
  title,
  description,
  isOpen,
  body,
  divider,
  footer,
  bodyClassName,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent
      className={bodyClassName}
      onInteractOutside={(e) => {
        e.preventDefault();
      }}
    >
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <div>{body}</div>

      <div>{divider}</div>

      <DialogFooter>
        {footer}
      </DialogFooter>
    </DialogContent>
  </Dialog>
  );
}

export default Modal;
