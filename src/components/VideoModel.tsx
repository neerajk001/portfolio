import React, { useEffect,useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const VideoModel: React.FC<Props> = ({ isOpen, onClose, src }) => {
   const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray/50  bg-opacity-80 flex justify-center items-center w-full h-auto backdrop-blur-sm">
      <div ref={modalRef}className="bg-black rounded-lg max-w-4xl w-full p-12 relative">
        <video controls autoPlay className="w-full h-auto rounded">
          <source src={src} type="video/mp4" />
          Your browser does not support this video.
        </video>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default VideoModel;
