import React from 'react';

const ConfirmModal = ({ message, description, onConfirm, onCancel }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-base-200 rounded-lg shadow-lg p-6 w-96">
                <h2 className="mb-2 text-color-gray">Confirm Action</h2>
                <div className='mb-6'>
                    <div className="text-lg font-semibold">{message}</div>
                    {description && <div>{description}</div>}
                </div>
                <div className="flex justify-end space-x-4">
                    <button className="btn btn-error btn-sm rounded" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-info btn-sm rounded" onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;