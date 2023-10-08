import React from "react";

interface IErrorMessageProps {
  errorType: string | undefined;
  messages: Record<string, string>;
}
export const ErrorMessage: React.FC<IErrorMessageProps> = ({errorType, messages}) => {
    return errorType && messages[errorType] ? (
        <span role="alert" className="error-message">
          {messages[errorType]}
        </span>
      ) : null;
};


