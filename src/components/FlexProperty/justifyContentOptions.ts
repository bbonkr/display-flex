import { CssOptions } from './CssOptions';
import { globalCssOptions } from './globalCssOptions';

const justifyContentGroup: CssOptions = {
    id: 'justify-content',
    value: 'Justify Content',
};

export const justifyContentOptions: CssOptions[] = [
    {
        id: 'justify-content-center',
        value: 'center',
        description: 'Pack items around the center',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-start',
        value: 'start',
        description: 'Pack items from the start',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-end',
        value: 'end',
        description: 'Pack items from the end',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-flex-start',
        value: 'flex-start',
        description: 'Pack flex items from the start',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-flex-end',
        value: 'flex-end',
        description: 'Pack flex items from the end',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-left',
        value: 'left',
        description: 'Pack items from the left',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-right',
        value: 'right',
        description: 'Pack items from the right',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-normal',
        value: 'normal',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-space-between',
        value: 'space-between',
        description:
            ' Distribute items evenly The first item is flush with the start, the last is flush with the end',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-space-around',
        value: 'space-around',
        description: 'Distribute items evenly Items have a half-size space on either end',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-space-evenly',
        value: 'space-evenly',
        description: 'Distribute items evenly Items have equal space around them',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-stretch',
        value: 'stretch',
        description: "Distribute items evenly Stretch 'auto'-sized items to fit the container",
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-safe-center',
        value: 'safe center',
        group: justifyContentGroup,
    },
    {
        id: 'justify-content-unsafe-center',
        value: 'unsafe center',
        group: justifyContentGroup,
    },
    ...globalCssOptions,
];
