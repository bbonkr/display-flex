import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { MainLayout } from '../MainLayout';
import { DisplayFlex } from '../DisplayFlex';
import { FlexProperty } from '../FlexProperty';
import { FlexPropertyFormState } from '../../lib/FlexPropertyFormState';
import { loadTheme } from '@fluentui/react';

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
        setFlexProperty((prevState) => ({
            ...prevState,
            ...state,
            values: {
                ...prevState.values,
                ...state.values,
            },
        }));
    };

    useEffect(() => {
        loadTheme({
            defaultFontStyle: { fontFamily: 'Monaco, Menlo, Consolas', fontWeight: 'regular' },
            fonts: {
                small: {
                    fontSize: '11px',
                },
                medium: {
                    fontSize: '13px',
                },
                large: {
                    fontSize: '20px',
                    fontWeight: 'semibold',
                },
                xLarge: {
                    fontSize: '22px',
                    fontWeight: 'semibold',
                },
            },
        });

        if (process.env.GA_ID) {
            ReactGA.initialize(process.env.GA_ID);

            if (window) {
                ReactGA.pageview(window.location.pathname);
            }
        }
    }, []);

    return (
        <MainLayout>
            <div className="top-conatainer">
                <DisplayFlex {...flexProperty.values} />
                <div className="code-container">
                    <h2>CSS</h2>
                    <pre>{`.container {
    display: flex;
    flex-direction: ${flexProperty.values.flexDirection};
    justify-content: ${flexProperty.values.justifyContent};
    align-items: ${flexProperty.values.alignItems};
    flex-wrap: ${flexProperty.values.flexWrap};
}`}</pre>
                </div>
            </div>

            <div className="form-container">
                <FlexProperty onChange={handleChangeFlexProperty} />

                <div>
                    <h2>References</h2>
                    <aside>
                        <p>
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Glossary/Flexbox"
                                target="_blank"
                            >
                                MDN: Flexbox
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/bbonkr/display-flex" target="_blank">
                                GitHub: bbonkr/display-flex
                            </a>
                        </p>
                    </aside>
                </div>
            </div>
        </MainLayout>
    );
};
