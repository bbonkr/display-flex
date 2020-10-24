import { FlexDirection } from '../../lib/FlexDirection';
import { CssOptions } from './CssOptions';
import { globalCssOptions } from './globalCssOptions';

const flexDirectionGroup: CssOptions = {
    id: 'flex-direction',
    value: 'Flex direction',
};

export const flexDirectionOptions: CssOptions[] = [
    {
        id: 'flex-direction-row',
        value: 'row',
        group: flexDirectionGroup,
    },
    {
        id: 'flex-direction-row-reverse',
        value: 'row-reverse',
        group: flexDirectionGroup,
    },
    {
        id: 'flex-direction-column',
        value: 'column',
        group: flexDirectionGroup,
    },
    {
        id: 'flex-direction-column-reverse',
        value: 'column-reverse',
        group: flexDirectionGroup,
    },
    ...globalCssOptions,
];
