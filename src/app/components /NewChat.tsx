import { PlusIcon } from '@heroicons/react/24/solid';

const NewChat = () =>{
  return (
    <div className="chatRow border-gray-700 border">
            <PlusIcon className="h-4 w-4" />
           <p>New Chat</p> 
   </div>
  );
};

export default NewChat;
