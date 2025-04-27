"use client";
import { useRef } from "react";
import { Upload } from "lucide-react";

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const response = await fetch("http://localhost:8000/upload/pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      console.log("Upload success:", result);
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Failed to upload the file.");
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
        accept="application/pdf"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
