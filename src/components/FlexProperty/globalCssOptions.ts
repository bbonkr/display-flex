import { CssOptions } from './CssOptions';

const globalGroup: CssOptions = {
    id: 'global-group',
    value: 'Global Values',
};

export const globalCssOptions: CssOptions[] = [
    {
        id: 'initial',
        value: 'initial',
        group: globalGroup,
    },
    {
        id: 'revert',
        value: 'revert',
        group: globalGroup,
    },
    {
        id: 'unset',
        value: 'unset',
        group: globalGroup,
    },
    {
        id: 'inherit',
        value: 'inherit',
        group: globalGroup,
    },
];
