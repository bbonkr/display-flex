import { CssOptions } from './CssOptions';
import { globalCssOptions } from './globalCssOptions';

const flexWrapGroup: CssOptions = {
    id: 'flex-wrap',
    value: 'Flex Wrap',
};

export const flexWrapOptions: CssOptions[] = [
    {
        id: 'flex-wrap-nowrap',
        value: 'nowrap',
        group: flexWrapGroup,
    },
    {
        id: 'flex-wrap-wrap',
        value: 'wrap',
        group: flexWrapGroup,
    },
    {
        id: 'flex-wrap-wrap-reverse',
        value: 'wrap-reverse',
        group: flexWrapGroup,
    },
    ...globalCssOptions,
];
