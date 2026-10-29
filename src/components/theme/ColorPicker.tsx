import React, { useRef } from 'react';
import { useColor } from '../../hooks/useColor';

const ColorPicker: React.FC = () => {
  const { primaryColor, setPrimaryColor } = useColor();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex items-center justify-center p-2 rounded-lg cursor-pointer group" title="Change Accent Color" onClick={() => inputRef.current?.click()}>
      <span className="material-symbols-outlined block leading-none transition-colors duration-300 group-hover:text-primary">
        palette
      </span>
      <label htmlFor="primary-color" className="sr-only">Change accent color</label>
      <input
        ref={inputRef}
        id="primary-color"
        type="color"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
      />
    </div>
  );
};

export default ColorPicker;
