import React from 'react';
interface AmongUsProps {
    color: string;
  }

export default function AmongUs(props: AmongUsProps) {
return (
    <div style={{ backgroundColor: props.color, width: '100px', height: '100px' }}>
    <img src="https://i.imgur.com/5Jzvz7M.png" alt="Among Us character" />
    </div>
);
}