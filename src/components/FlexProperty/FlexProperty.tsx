import {
    DefaultPalette,
    Dropdown,
    IconButton,
    IDropdownOption,
    IDropdownStyles,
    IStackStyles,
    Label,
    MessageBar,
    Stack,
} from '@fluentui/react';
import React, { useState, useEffect } from 'react';
import { FlexPropertyFormState } from '../../lib/FlexPropertyFormState';
import { alignItemsOptions } from './alignItemsOptions';
import { flexDirectionOptions } from './flexDirectionsOptions';
import { flexWrapOptions } from './flexWrapOptions';
import { justifyContentOptions } from './justifyContentOptions';

export interface FlexPropertyProps {
    onChange?: (value: FlexPropertyFormState) => void;
}

const stackStyles: IStackStyles = {
    root: {
        // background: DefaultPalette.themeTertiary,
        width: `100%`,
    },
};

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 150 },
};

export const FlexProperty = ({ onChange }: FlexPropertyProps) => {
    const [formState, setFormState] = useState<FlexPropertyFormState>({
        values: {
            boxes: 8,
            flexDirection: 'row',
            justifyContent: 'normal',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
        },
    });

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: event.target.value,
            },
        }));
    };
    const handleClickBoxes = (value: number) => () => {
        setFormState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                boxes: prevState.values.boxes + value,
            },
        }));
    };

    const handleChangeFlexDirection = (
        event: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption | undefined,
        index?: number | undefined,
    ) => {
        if (option) {
            setFormState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    flexDirection: option.key as string,
                },
            }));
        }
    };

    const handleChangeJustifyContent = (
        event: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption | undefined,
        index?: number | undefined,
    ) => {
        if (option) {
            setFormState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    justifyContent: option.key as string,
                },
            }));
        }
    };

    const handleChangeAlignItems = (
        event: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption | undefined,
        index?: number | undefined,
    ) => {
        if (option) {
            setFormState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    alignItems: option.key as string,
                },
            }));
        }
    };

    const handleChangeFlexWrap = (
        event: React.FormEvent<HTMLDivElement>,
        option?: IDropdownOption | undefined,
        index?: number | undefined,
    ) => {
        if (option) {
            setFormState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    flexWrap: option.key as string,
                },
            }));
        }
    };

    useEffect(() => {
        if (onChange) {
            onChange(formState);
        }
    }, [formState]);

    return (
        <React.Fragment>
            <h2>Try it yourself!</h2>

            <form role="form">
                <Stack tokens={{ childrenGap: 16 }} horizontal wrap styles={stackStyles}>
                    <Stack.Item grow>
                        <legend title="box count">
                            <Label>Boxes</Label>
                            <div className="boxes-form-group">
                                <Stack
                                    tokens={{ childrenGap: 8 }}
                                    styles={stackStyles}
                                    horizontal
                                    verticalAlign="center"
                                >
                                    <Stack.Item>
                                        <IconButton
                                            size={1}
                                            disabled={formState.values.boxes <= 1}
                                            onClick={handleClickBoxes(-1)}
                                            // text="-"
                                            iconProps={{
                                                iconName: 'Remove',
                                            }}
                                        />
                                    </Stack.Item>
                                    <Stack.Item>{formState.values.boxes}</Stack.Item>
                                    <Stack.Item>
                                        {' '}
                                        <IconButton
                                            size={1}
                                            iconProps={{
                                                iconName: 'Add',
                                            }}
                                            disabled={formState.values.boxes >= 20}
                                            onClick={handleClickBoxes(1)}
                                        />
                                    </Stack.Item>
                                </Stack>
                            </div>
                        </legend>
                    </Stack.Item>
                    <Stack.Item grow>
                        <legend title="flex-direction">
                            <Dropdown
                                label="Flex Direction"
                                options={flexDirectionOptions.map((x) => ({
                                    key: x.value,
                                    text: x.value,
                                    data: x,
                                }))}
                                onChange={handleChangeFlexDirection}
                                selectedKey={formState.values.flexDirection}
                                styles={dropdownStyles}
                            />
                        </legend>
                    </Stack.Item>
                    <Stack.Item grow>
                        <legend>
                            <Dropdown
                                label="Justify Content"
                                options={justifyContentOptions.map((x) => ({
                                    key: x.value,
                                    text: x.value,
                                    data: x,
                                }))}
                                onChange={handleChangeJustifyContent}
                                selectedKey={formState.values.justifyContent}
                                styles={dropdownStyles}
                            />
                        </legend>
                    </Stack.Item>
                    <Stack.Item grow>
                        <legend>
                            <Dropdown
                                label="Align Items"
                                options={alignItemsOptions.map((x) => ({
                                    key: x.value,
                                    text: x.value,
                                    data: x,
                                }))}
                                onChange={handleChangeAlignItems}
                                selectedKey={formState.values.alignItems}
                                styles={dropdownStyles}
                            />
                        </legend>
                    </Stack.Item>
                    <Stack.Item grow>
                        <legend>
                            <Dropdown
                                label="Flex Wrap"
                                options={flexWrapOptions.map((x) => ({
                                    key: x.value,
                                    text: x.value,
                                    data: x,
                                }))}
                                onChange={handleChangeFlexWrap}
                                selectedKey={formState.values.flexWrap}
                                styles={dropdownStyles}
                            />
                        </legend>
                    </Stack.Item>
                </Stack>
            </form>
        </React.Fragment>
    );
};
