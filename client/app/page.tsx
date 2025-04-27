import Image from "next/image";
import FileUpload from "./components/file-upload";
import ChatComponent from "./components/chat";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex">
        <div className="w-[30vw] min-h-screen bg-gray-200 flex items-center justify-center">
          <FileUpload />
        </div>
        <div className="w-[70vw] min-h-screen border-l-2 border-gray-400 p-4">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}