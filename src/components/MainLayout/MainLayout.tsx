import React from 'react';

export const MainLayout: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="fixed-header">
                    <h1>display:flex;</h1>
                </div>
                <div className="container">{children}</div>
            </div>
        </React.Fragment>
    );
};
