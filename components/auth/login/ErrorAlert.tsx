import React from 'react';
import { Alert } from 'antd';

interface ErrorAlertProps {
    error: string;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => (
    error ? <Alert description={error} type="error" /> : null
);

export default ErrorAlert;
