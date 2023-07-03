import React from 'react';
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
  const name2Show = (assigned && user) ? user.name : label;
  const image = (assigned && user) ? user.img : '';
  const showWhenUnAssigned = !assigned ? "": " hide";
  const showWhenAssigned = assigned ? "": " hide";
  const grayoutText = assigned ? "replyAs" : ""
  return (
    <div className='chat-input-field' {...props} onClick={() => updateArgs({ isOpen: !isOpen })}>
      <label className={['replyAs',showWhenAssigned].join(' ')}>Replying as&nbsp;</label>
      <div className={['extraComps', grayoutText].join(' ')}>
        <b><FiUserPlus className={['add-icon', showWhenUnAssigned].join(' ')}  /></b> 
        <Image src={image} alt="" className={['img-profile', showWhenAssigned].join(' ')} width={15} height={15}/>
        {name2Show}
      </div>
      <input className={['text-input', showWhenAssigned].join(' ')} type='text' />
      <div className='extraComps send'>
        <FiSend className='send-icon'/> 
      </div>
    </div>
  );
};
