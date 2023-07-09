"use client";

import Modal from "@/app/components/common/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClose, src, isOpen }) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" src={src} fill className="object-cover" />
      </div>
    </Modal>
  );
};

export default ImageModal;
