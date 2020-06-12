import React, { useState } from 'react';
import { MainLayout } from '../MainLayout';
import { DisplayFlex } from '../DisplayFlex';
import { FlexProperty } from '../FlexProperty';
import { FlexPropertyFormState } from '../../lib/FlexPropertyFormState';

export const App = () => {
    const [flexProperty, setFlexProperty] = useState<FlexPropertyFormState>({
        values: {
            boxes: 8,
            flexDirection: 'row',
            justifyContent: 'normal',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
        },
    });

    const handleChangeFlexProperty = (state: FlexPropertyFormState) => {
        console.info(state);

        setFlexProperty((prevState) => ({
            ...prevState,
            ...state,
            values: {
                ...prevState.values,
                ...state.values,
            },
        }));
    };

    return (
        <MainLayout>
            <DisplayFlex {...flexProperty.values} />
            <div className="form-container">
                <FlexProperty onChange={handleChangeFlexProperty} />
                <div className="code-container">
                    <h2>CSS</h2>
                    <pre>{`.container {
    display: flex;
    justify-content: ${flexProperty.values.justifyContent};
    align-items: ${flexProperty.values.alignItems};
    flex-wrap: ${flexProperty.values.flexWrap};
}`}</pre>
                </div>

                <div>
                    <aside>
                        <h2>References</h2>
                        <p>
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox"
                                target="_blank"
                            >
                                MDN: Flexbox
                            </a>
                        </p>
                    </aside>
                </div>
            </div>
        </MainLayout>
    );
};
