# PDF Chat with RAG (Retrieval-Augmented Generation)

A full-stack application that allows users to upload PDF files and chat with their contents using RAG approach powered by OpenAI and Qdrant vector database.

## Project Structure

```
.
├── client/          # Next.js frontend application
└── server/          # Express.js backend server
```

## Prerequisites

- Node.js 18 or higher
- PNPM package manager
- Redis server running on port 6379
- Qdrant vector database running on port 6333
- OpenAI API key

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd RAG-NextJs
```

2. Install dependencies:
```bash
# Install client dependencies
cd client
pnpm install

# Install server dependencies
cd ../server
pnpm install
```

3. Configure environment variables:
   - Add your OpenAI API key in `server/index.js`
   - Set up any required environment variables in `client/.env`

4. Start the development servers:

```bash
# Start the backend server (from server directory)
pnpm dev

# Start the frontend development server (from client directory)
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) to access the application

## Features

- PDF file upload and processing
- Vector storage using Qdrant
- Real-time chat interface with PDF contents
- RAG-based responses using OpenAI's GPT-4
- Background job processing with BullMQ

## Tech Stack

- **Frontend**:
  - Next.js 14
  - TypeScript
  - TailwindCSS
  - Lucide Icons

- **Backend**:
  - Express.js
  - LangChain
  - OpenAI
  - Qdrant Vector Store
  - BullMQ for job processing
  - Multer for file uploads

## API Endpoints

- `GET /` - Health check endpoint
- `POST /upload/pdf` - Upload PDF file
- `GET /chat` - Chat with PDF contents

## License

ISC