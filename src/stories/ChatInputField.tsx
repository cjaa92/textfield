import React, { useState } from 'react';
import { FiUserPlus ,FiSend} from "react-icons/fi";
import './ChatInputField.css';
import Image from 'next/image';

type User = {
  name: string;
  img: string;
};

interface ChatInputFieldsProps {
  user?: User;
  /**
   * Is assigned?
   */
  assigned?: boolean;
  /**
   * ChatInputFields contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ChatInputFields = ({
  assigned = false,
  label,
  user,
  ...props
}: ChatInputFieldsProps) => {
  const [isAssigned, updateAssigned] = useState<boolean>(false)
  const [isWritting, updateWritting] = useState<boolean>(false)
  const [message, updateMessage] = useState<string>('')
  const handleClick = () => updateAssigned(true);
  const handleWritting = () => updateWritting(true);
  const handleWrittingBlur = (event: { preventDefault: () => void; }) => {
    if (message.trim().length === 0) {
      updateWritting(false);
    }
  }
  const send = (event: { preventDefault: () => void; }) => {
    if (message.trim().length === 0) {
      alert('The message is empty...');
    } else {
      alert('Message sent! --> '+message.trim());
      updateAssigned(false)
      updateWritting(false)
      updateMessage('')
    }
  }
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    updateMessage(event.target.value);
  };
  const name2Show = (isAssigned && user) ? user.name : 'Assign myself and reply';
  const image = (isAssigned && user) ? user.img : '';
  const showWhenUnAssigned = !isAssigned ? "": " hide";
  const showWhenAssigned = isAssigned ? "": " hide";
  const showWhenWritting = isWritting ? "hideBackground": "";
  const grayoutText = isAssigned ? "replyAs" : ""
  const selected = isAssigned ? "selected" : ""
  return (
    <div className={['chat-input-field',selected].join(' ')} {...props} >
      <label className={['replyAs',showWhenWritting,showWhenAssigned].join(' ')}>Replying as</label>
      <button className={['extraComps',showWhenWritting, grayoutText].join(' ')} onClick={handleClick}>
        <FiUserPlus  className={['add-icon', showWhenUnAssigned].join(' ')} />
        <Image src={image} alt="" className={['img-profile', showWhenAssigned].join(' ')} width={20} height={20}/>
        &nbsp;&nbsp;
        {name2Show}
      </button>
      <input id='in_Chat' name='in_Chat' value={message} className={['text-input', showWhenAssigned].join(' ')} type='text' onFocus={handleWritting} onBlur={handleWrittingBlur} onChange={handleChange}/>
      <button className='sendComps' >
        <FiSend  className='send-icon' onClick={send} />
      </button>
    </div>
  );
};
