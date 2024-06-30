import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ChatBubble = ({ sender, message }) => {
  const isUser = sender === 'user';
  const backgroundColor = isUser ? 'bg-slate-100' : 'bg-blue-200'; // Change background color based on sender
  const alignSelf = isUser ? 'flex-end' : 'flex-start';

  const [timestamp, setTimestamp] = useState('');
  const formatTimestamp = (messageTime) => {
    const now = new Date();
    const diffInMilliseconds = now - messageTime;

    if (diffInMilliseconds < 1000) {
      return 'Now';
    } else if (diffInMilliseconds < 60000) {
      return `a few seconds ago`;
    } else if (diffInMilliseconds < 3600000) {
      const minutes = Math.floor(diffInMilliseconds / 60000);
      return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
    } else if (diffInMilliseconds < 86400000) {
      const hours = Math.floor(diffInMilliseconds / 3600000);
      return `${hours} hours ago`;
    } else {
      return messageTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
  };

  useEffect(() => {
    const messageTime = new Date(); // Use current time as the message time
    const formattedTimestamp = formatTimestamp(messageTime);
    setTimestamp(formattedTimestamp);

    // Update timestamp every second to keep it current
    const intervalId = setInterval(() => {
      const formattedTimestamp = formatTimestamp(messageTime);
      setTimestamp(formattedTimestamp);
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="flex flex-col gap-0 p-2" style={{ alignSelf }}>
              <div className="bg-purple-400 text-purple-50 w-fit text-center text-xs px-1">
        {timestamp}
      </div>
      <div className={`text-box border text-left border-gray-200 ${backgroundColor} text-black font-semibold p-2`}>
        {message}
      </div>
    </div>
  );
};

ChatBubble.propTypes = {
  sender: PropTypes.oneOf(['user', 'server']).isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatBubble;
