import React from 'react';
import { Box } from './Box';
import { FlexDirection } from '../../lib/FlexDirection';
import { FlexWrap } from '../../lib/FlexWrap';

interface DisplayFlexProps {
    /**
     * 상자수
     *
     * 기본: 8
     */
    boxes?: number;
    flexDirection?: FlexDirection;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: FlexWrap;
}

export const DisplayFlex = ({
    boxes,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
}: DisplayFlexProps) => {
    return (
        <div className="flex-boxes-container">
            <div
                style={{
                    display: 'flex',
                    flexDirection: flexDirection || 'row',
                    justifyContent: justifyContent || 'normal',
                    alignItems: alignItems || 'stretch',
                    flexWrap: flexWrap || 'nowrap',
                }}
            >
                {Array(boxes || 8)
                    .fill(0)
                    .map((v, i) => {
                        return (
                            <Box
                                key={i}
                                style={{
                                    flex: '1',
                                    display: 'flex',
                                    minWidth: '100px',
                                    // maxWidth: '100px',
                                    minHeight: '100px',
                                    // maxHeight: '100px',
                                    padding: '12px',
                                    margin: 3,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: `rgb(${32 + i * 3},${32 + i * 2}, ${
                                        255 - i * 6
                                    })`,
                                    color: '#ffffff',
                                    fontWeight: 600,
                                }}
                            >
                                {i + 1}
                            </Box>
                        );
                    })}
            </div>
        </div>
    );
};
