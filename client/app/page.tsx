import Image from "next/image";
import FileUpload from "./components/file-upload";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex">
        <div className="w-[30vw] min-h-screen bg-gray-200 flex items-center justify-center">
          <FileUpload />
        </div>
        <div className="w-[70vw] min-h-screen border-l-2 border-gray-400 p-4">
          <h1 className="text-2xl font-bold">Content Area</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}