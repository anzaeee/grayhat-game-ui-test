import { useState } from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import { Input as BaseInput } from '@mui/base/Input';
import "./styles.css";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input flex flex-grow items-center bg-white">
      <BaseInput disableRipple disableFocusRipple
        className="flex p-2 w-full" 
        placeholder="Type your message..." 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BaseButton disableRipple disableFocusRipple
        className="send-button p-2 w-fit bg-white text-black shadow-button"
        onClick={handleSend}
      >
        →
      </BaseButton>
    </div>
  );
};

export default ChatInput;


// import { useState } from 'react';
// import { Button as BaseButton } from '@mui/base/Button';
// import { Input as BaseInput, inputClasses } from '@mui/base/Input';
// import { styled } from '@mui/system';
// import "./styles.css";

// const CustomInput = styled(BaseInput)(
//   ({ theme }) => `
//   flex-grow: 1;
//   padding: 8px 12px;
//   border: none;
//   outline: none;
//   background: transparent;

//   &.${inputClasses.focused} {
//     border: none;
//     box-shadow: none;
//   }

//   &:focus-visible {
//     outline: none;
//   }
// `,
// );

// const ChatInput = ({ onSendMessage }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = () => {
//     if (message.trim() !== '') {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div className="chat-input flex items-center bg-white">
//       <CustomInput 
//         className="flex p-2 w-full" 
//         placeholder="Type your message..." 
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyPress={handleKeyPress}
//         disableRipple
//         disableFocusRipple
//       />
//       <BaseButton 
//         className="send-button p-2 bg-white text-black shadow-button"
//         onClick={handleSend}
//         disableRipple
//         disableFocusRipple
//       >
//         →
//       </BaseButton>
//     </div>
//   );
// };

// export default ChatInput;
