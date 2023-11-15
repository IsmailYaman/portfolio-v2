import React from "react";

const DevelopmentMessage = () => {
    // Check if the current environment is development
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
        return (
            <div className="toast toast-start z-50">
                <div className="alert alert-warning">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>This is the development environment.</span>
                </div>
            </div>
        );
    }

    // Return null if not in development environment
    return null;
};

export default DevelopmentMessage;
