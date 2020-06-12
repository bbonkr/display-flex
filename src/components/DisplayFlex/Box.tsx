import React from 'react';

interface BoxProps {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

export const Box = ({ children, style, className }: BoxProps) => {
    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};
