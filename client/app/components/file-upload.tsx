"use client";
import { useRef } from "react";
import { Upload } from "lucide-react";

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle file upload logic here (e.g., upload to S3, Firebase, etc.)
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center justify-center space-y-4 cursor-pointer"
    >
      <Upload className="w-12 h-12 text-blue-500" />
      <label className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Upload File
      </label>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
