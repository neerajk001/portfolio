import React from 'react';
import DottedButton from './DottedButton';
import { Home, FolderOpenDot, User } from 'lucide-react';

const FooterBar: React.FC = () => {
  return (
    <div className="fixed bottom-6 inset-x-0 z-20 px-8 md:hidden">
      <div className="bg-gradient-to-t from-gray-900/70 to-gray-700/30 backdrop-blur-md flex justify-around items-center py-2 rounded-xl shadow-lg max-w-3xl mx-auto opacity-90">
        <DottedButton label ="About"icon={<Home size={15}  />} />
        <DottedButton label='Projects' icon={<FolderOpenDot size={15} />} />
        <DottedButton label='Hire me' icon={<User size={15} />} />
      </div>
    </div>
  );
};

export default FooterBar;
