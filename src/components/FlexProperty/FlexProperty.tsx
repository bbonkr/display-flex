import React, { useState, useEffect } from 'react';
import { FlexPropertyFormState } from '../../lib/FlexPropertyFormState';

export interface FlexPropertyProps {
    onChange?: (value: FlexPropertyFormState) => void;
}

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

    useEffect(() => {
        if (onChange) {
            onChange(formState);
        }
    }, [formState]);

    return (
        <React.Fragment>
            <h2>Try it yourself!</h2>

            <form role="form">
                <legend title="box count">
                    <h3>Boxes</h3>
                    <div className="boxes-form-group">
                        <button
                            type="button"
                            disabled={formState.values.boxes <= 1}
                            onClick={handleClickBoxes(-1)}
                        >
                            -
                        </button>
                        {formState.values.boxes}
                        <button type="button" onClick={handleClickBoxes(1)}>
                            +
                        </button>
                    </div>
                </legend>
                <legend title="flex-direction">
                    <h3>flex-direction</h3>
                    <ul className="no-list-style">
                        <li>
                            <input
                                type="radio"
                                value="row"
                                checked={formState.values.flexDirection === 'row'}
                                name="flexDirection"
                                id="flex-direction-row"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-row">row</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="row-reverse"
                                checked={formState.values.flexDirection === 'row-reverse'}
                                name="flexDirection"
                                id="flex-direction-row-reverse"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-row-reverse">row-reverse</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="column"
                                checked={formState.values.flexDirection === 'column'}
                                name="flexDirection"
                                id="flex-direction-column"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-column">column</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="column-reverse"
                                checked={formState.values.flexDirection === 'column-reverse'}
                                name="flexDirection"
                                id="flex-direction-column-reverse"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-column-reverse">column-reverse</label>
                        </li>
                        <li>
                            <span>Global values</span>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="initial"
                                checked={formState.values.flexDirection === 'initial'}
                                name="flexDirection"
                                id="flex-direction-initial"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-initial">initial</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="revert"
                                checked={formState.values.flexDirection === 'revert'}
                                name="flexDirection"
                                id="flex-direction-revert"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-revert">revert</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unset"
                                checked={formState.values.flexDirection === 'unset'}
                                name="flexDirection"
                                id="flex-direction-unset"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-unset">unset</label>
                        </li>

                        <li>
                            <input
                                type="radio"
                                value="inherit"
                                checked={formState.values.flexDirection === 'inherit'}
                                name="flexDirection"
                                id="flex-direction-inherit"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-direction-inherit">inherit</label>
                        </li>
                    </ul>
                </legend>

                <legend>
                    <h3>justify-content</h3>
                    <ul className="no-list-style">
                        <li>
                            <span>Positional alightment</span>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="center"
                                checked={formState.values.justifyContent === 'center'}
                                name="justifyContent"
                                id="justify-content-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-center">
                                center
                                <span className="help-text">
                                    <small>Pack items around the center</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="start"
                                checked={formState.values.justifyContent === 'start'}
                                name="justifyContent"
                                id="justify-content-start"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-start">
                                start
                                <span className="help-text">
                                    <small>Pack items from the start</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="end"
                                checked={formState.values.justifyContent === 'end'}
                                name="justifyContent"
                                id="justify-content-end"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-end">
                                end
                                <span className="help-text">
                                    <small>Pack items from the end</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="flex-start"
                                checked={formState.values.justifyContent === 'flex-start'}
                                name="justifyContent"
                                id="justify-content-flex-start"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-flex-start">
                                flex-start
                                <span className="help-text">
                                    <small>Pack flex items from the start</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="flex-end"
                                checked={formState.values.justifyContent === 'flex-end'}
                                name="justifyContent"
                                id="justify-content-flex-end"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-flex-end">
                                flex-end
                                <span className="help-text">
                                    <small>Pack flex items from the end</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="left"
                                checked={formState.values.justifyContent === 'left'}
                                name="justifyContent"
                                id="justify-content-left"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-left">
                                left
                                <span className="help-text">
                                    <small>Pack items from the left</small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="right"
                                checked={formState.values.justifyContent === 'right'}
                                name="justifyContent"
                                id="justify-content-right"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-right">
                                right
                                <span className="help-text">
                                    <small>Pack items from the right</small>
                                </span>
                            </label>
                        </li>
                        <li>Normal alignment</li>
                        <li>
                            <input
                                type="radio"
                                value="normal"
                                checked={formState.values.justifyContent === 'normal'}
                                name="justifyContent"
                                id="justify-content-normal"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-normal">normal</label>
                        </li>
                        <li>Distributed alignment</li>
                        <li>
                            <input
                                type="radio"
                                value="space-between"
                                checked={formState.values.justifyContent === 'space-between'}
                                name="justifyContent"
                                id="justify-content-space-between"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-space-between">
                                space-between
                                <span className="help-text">
                                    <small>
                                        Distribute items evenly The first item is flush with the
                                        start, the last is flush with the end
                                    </small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="space-around"
                                checked={formState.values.justifyContent === 'space-around'}
                                name="justifyContent"
                                id="justify-content-space-around"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-space-around">
                                space-around
                                <span className="help-text">
                                    <small>
                                        Distribute items evenly Items have a half-size space on
                                        either end
                                    </small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="space-evenly"
                                checked={formState.values.justifyContent === 'space-evenly'}
                                name="justifyContent"
                                id="justify-content-space-evenly"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-space-evenly">
                                space-evenly
                                <span className="help-text">
                                    <small>
                                        Distribute items evenly Items have equal space around them
                                    </small>
                                </span>
                            </label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="stretch"
                                checked={formState.values.justifyContent === 'stretch'}
                                name="justifyContent"
                                id="justify-content-stretch"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-stretch">
                                stretch
                                <span className="help-text">
                                    <small>
                                        Distribute items evenly Stretch 'auto'-sized items to fit
                                        the container
                                    </small>
                                </span>
                            </label>
                        </li>
                        <li>Overflow alignment</li>
                        <li>
                            <input
                                type="radio"
                                value="safe center"
                                checked={formState.values.justifyContent === 'safe center'}
                                name="justifyContent"
                                id="justify-content-safe-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-safe-center">safe center</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unsafe center"
                                checked={formState.values.justifyContent === 'unsafe center'}
                                name="justifyContent"
                                id="justify-content-unsafe-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-unsafe-center">unsafe center</label>
                        </li>
                        <li>Global values</li>
                        <li>
                            <input
                                type="radio"
                                value="inherit"
                                checked={formState.values.justifyContent === 'inherit'}
                                name="justifyContent"
                                id="justify-content-inherit"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-inherit">inherit</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="initial"
                                checked={formState.values.justifyContent === 'initial'}
                                name="justifyContent"
                                id="justify-content-initial"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-initial">initial</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unset"
                                checked={formState.values.justifyContent === 'unset'}
                                name="justifyContent"
                                id="justify-content-unset"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="justify-content-unset">unset</label>
                        </li>
                    </ul>
                </legend>
                <legend>
                    <h3>align-items</h3>
                    <ul className="no-list-style">
                        <li>Basic keywords</li>
                        <li>
                            <input
                                type="radio"
                                value="normal"
                                checked={formState.values.alignItems === 'normal'}
                                name="alignItems"
                                id="align-items-normal"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-normal">normal</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="stretch"
                                checked={formState.values.alignItems === 'stretch'}
                                name="alignItems"
                                id="align-items-stretch"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-stretch">stretch</label>
                        </li>
                        <li>Positional alignment</li>
                        <li>
                            <input
                                type="radio"
                                value="center"
                                checked={formState.values.alignItems === 'center'}
                                name="alignItems"
                                id="align-items-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-center">center</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="start"
                                checked={formState.values.alignItems === 'start'}
                                name="alignItems"
                                id="align-items-start"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-start">start</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="end"
                                checked={formState.values.alignItems === 'end'}
                                name="alignItems"
                                id="align-items-end"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-end">end</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="flex-start"
                                checked={formState.values.alignItems === 'flex-start'}
                                name="alignItems"
                                id="align-items-flex-start"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-flex-start">flex-start</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="flex-end"
                                checked={formState.values.alignItems === 'flex-end'}
                                name="alignItems"
                                id="align-items-flex-end"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-flex-end">flex-end</label>
                        </li>
                        <li>Baseline alignment</li>
                        <li>
                            <input
                                type="radio"
                                value="baseline"
                                checked={formState.values.alignItems === 'baseline'}
                                name="alignItems"
                                id="align-items-baseline"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-baseline">baseline</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="first baseline"
                                checked={formState.values.alignItems === 'first baseline'}
                                name="alignItems"
                                id="align-items-first-baseline"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-first-baseline">first baseline</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="last baseline"
                                checked={formState.values.alignItems === 'last baseline'}
                                name="alignItems"
                                id="align-items-last-baseline"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-last-baseline">last baseline</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="safe center"
                                checked={formState.values.alignItems === 'safe center'}
                                name="alignItems"
                                id="align-items-safe-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-safe-center">safe center</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unsafe center"
                                checked={formState.values.alignItems === 'unsafe center'}
                                name="alignItems"
                                id="align-items-unsafe-center"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-unsafe-center">unsafe center</label>
                        </li>
                        <li>Global values</li>
                        <li>
                            <input
                                type="radio"
                                value="inherit"
                                checked={formState.values.alignItems === 'inherit'}
                                name="alignItems"
                                id="align-items-inherit"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-inherit">inherit</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="initial"
                                checked={formState.values.alignItems === 'initial'}
                                name="alignItems"
                                id="align-items-initial"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-initial">initial</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unset"
                                checked={formState.values.alignItems === 'unset'}
                                name="alignItems"
                                id="align-items-unset"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="align-items-unset">unset</label>
                        </li>
                    </ul>
                </legend>
                <legend>
                    <h3>flex-wrap</h3>
                    <ul className="no-list-style">
                        <li>
                            <input
                                type="radio"
                                value="nowrap"
                                checked={formState.values.flexWrap === 'nowrap'}
                                name="flexWrap"
                                id="flex-wrap-nowrap"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-nowrap">nowrap</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="wrap"
                                checked={formState.values.flexWrap === 'wrap'}
                                name="flexWrap"
                                id="flex-wrap-wrap"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-wrap">wrap</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="wrap-reverse"
                                checked={formState.values.flexWrap === 'wrap-reverse'}
                                name="flexWrap"
                                id="flex-wrap-wrap-reverse"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-wrap-reverse">wrap-reverse</label>
                        </li>
                        <li>Global values</li>
                        <li>
                            <input
                                type="radio"
                                value="inherit"
                                checked={formState.values.flexWrap === 'inherit'}
                                name="flexWrap"
                                id="flex-wrap-wrap-inherit"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-wrap-inherit">inherit</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="initial"
                                checked={formState.values.flexWrap === 'initial'}
                                name="flexWrap"
                                id="flex-wrap-wrap-initial"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-wrap-initial">initial</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                value="unset"
                                checked={formState.values.flexWrap === 'unset'}
                                name="flexWrap"
                                id="flex-wrap-wrap-unset"
                                onChange={handleChangeInput}
                            />
                            <label htmlFor="flex-wrap-wrap-unset">unset</label>
                        </li>
                    </ul>
                </legend>
            </form>
        </React.Fragment>
    );
};
