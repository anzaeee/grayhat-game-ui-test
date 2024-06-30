import React, { useState } from 'react';
import IconButton from '../components/IconButton/IconButton';
import { Button, KebabButton } from '../components/Button/Button';
import ChatInput from '../components/ChatInput/ChatInput';
import ChatBubble from '../components/ChatBubble/ChatBubble';

function Home() {
  const [messages, setMessages] = useState([
    { sender: 'server', message: 'Hello, dudette!' }
  ]);

  const handleSendMessage = (message) => {
    const newMessage = { sender: 'user', message };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 space-y-4">
      <div className="flex flex-col items-start gap-12 w-1/3 max-w-screen-lg p-4">
        <div className="flex items-center justify-center w-full mb-4">
          <div className="flex items-center justify-center gap-4">
            <IconButton />
            <Button>(42)</Button>
            <KebabButton />
          </div>
          {/* You can add more components or actions here */}
        </div>

        <div className="flex flex-col items-start w-full gap-12">
          <div className="flex flex-col w-full overflow-auto max-h-96">
            {messages.map((msg, index) => (
              <ChatBubble key={index} sender={msg.sender} message={msg.message} />
            ))}
          </div>
          <div className='w-full'>
                  <ChatInput onSendMessage={handleSendMessage} />
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
