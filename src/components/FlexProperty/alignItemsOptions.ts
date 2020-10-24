import { CssOptions } from './CssOptions';
import { globalCssOptions } from './globalCssOptions';

const alignItemsGroup: CssOptions = {
    id: 'align-items-basic',
    value: 'Basic keywords',
};

const alignItemsPositionGroup: CssOptions = {
    id: 'align-items-basic',
    value: 'Positional Alignment',
};

export const alignItemsOptions: CssOptions[] = [
    {
        id: 'align-items-normal',
        value: 'normal',
        group: alignItemsGroup,
    },
    {
        id: 'align-items-stretch',
        value: 'stretch',
        group: alignItemsGroup,
    },
    {
        id: 'align-items-center',
        value: 'center',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-start',
        value: 'start',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-end',
        value: 'end',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-flex-start',
        value: 'flex-start',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-flex-end',
        value: 'flex-end',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-baseline',
        value: 'baseline',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-first-baseline',
        value: 'first baseline',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-last-baseline',
        value: 'last baseline',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-safe-center',
        value: 'safe center',
        group: alignItemsPositionGroup,
    },
    {
        id: 'align-items-unsafe-center',
        value: 'unsafe center',
        group: alignItemsPositionGroup,
    },
    ...globalCssOptions,
];
