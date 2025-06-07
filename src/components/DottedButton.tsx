import React from 'react';
import NeumorphismButton from './NeumorphismButton';

interface DottedButtonProps {
  icon: React.ReactNode;
  label?: string;
}

const DottedButton: React.FC<DottedButtonProps> = ({ icon, label }) => {
  return (
    <div className="bg-slate-100 flex items-center rounded-full justify-center">
      <NeumorphismButton icon={icon} label={label} />
    </div>
  );
};

export default DottedButton;
