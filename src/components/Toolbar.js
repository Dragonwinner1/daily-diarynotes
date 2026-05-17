import React, { useState } from 'react';
import './Toolbar.css';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdUndo,
  MdRedo,
  MdEdit,
  MdClose,
} from 'react-icons/md';

function Toolbar({ showDrawing, onToggleDrawing }) {
  const [fontFamily, setFontFamily] = useState('Calibri');
  const [fontSize, setFontSize] = useState(16);

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleDrawingToggle = () => {
    onToggleDrawing(!showDrawing);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-group">
        <select
          value={fontFamily}
          onChange={(e) => {
            setFontFamily(e.target.value);
            applyFormat('fontName', e.target.value);
          }}
          className="font-select"
        >
          <option value="Calibri">Calibri</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>

        <select
          value={fontSize}
          onChange={(e) => {
            const size = e.target.value;
            setFontSize(size);
            applyFormat('fontSize', size);
          }}
          className="font-size-select"
        >
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="28">28</option>
          <option value="32">32</option>
        </select>
      </div>

      <div className="toolbar-group">
        <button
          className="toolbar-btn"
          onClick={() => applyFormat('bold')}
          title="Bold (Ctrl+B)"
        >
          <MdFormatBold size={18} />
        </button>
        <button
          className="toolbar-btn"
          onClick={() => applyFormat('italic')}
          title="Italic (Ctrl+I)"
        >
          <MdFormatItalic size={18} />
        </button>
        <button
          className="toolbar-btn"
          onClick={() => applyFormat('underline')}
          title="Underline (Ctrl+U)"
        >
          <MdFormatUnderlined size={18} />
        </button>
      </div>

      <div className="toolbar-group">
        <button
          className="toolbar-btn"
          onClick={() => applyFormat('undo')}
          title="Undo (Ctrl+Z)"
        >
          <MdUndo size={18} />
        </button>
        <button
          className="toolbar-btn"
          onClick={() => applyFormat('redo')}
          title="Redo (Ctrl+Y)"
        >
          <MdRedo size={18} />
        </button>
      </div>

      <div className="toolbar-group">
        <button
          className={`toolbar-btn drawing-btn ${showDrawing ? 'active' : ''}`}
          onClick={handleDrawingToggle}
          title="Draw with S Pen"
        >
          {showDrawing ? <MdClose size={18} /> : <MdEdit size={18} />}
          {showDrawing ? 'Close Drawing' : 'Draw'}
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
