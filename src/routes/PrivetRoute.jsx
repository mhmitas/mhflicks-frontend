import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <LoadingSpinner />
    }

    if (user) {
        return children
    }

    return <Navigate to="/" replace />
};

export default PrivetRoute;