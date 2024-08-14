import React from 'react';
import { createRoot } from "react-dom/client";
import ConfirmModal from './ConfirmModal';

const askForSignInModal = (message = "continue") => {
    return new Promise((resolve, reject) => {
        const div = document.createElement("div");
        document.body.appendChild(div)

        const root = createRoot(div)

        const handleConfirm = () => {
            cleanup()
            resolve(true)
        }

        const handleCancel = () => {
            cleanup()
            resolve(false)
        }

        const cleanup = () => {
            root.unmount()
            div.remove()
        }

        root.render(
            <Modal
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message={message}
            />
        )
    })
};

export default askForSignInModal;


function Modal({ onConfirm, onCancel, message }) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
            <div className="bg-base-200 rounded-lg shadow-lg p-6 w-96">
                <div className="text-lg font-semibold mb-6 text-center">Please Sign In to {message}</div>
                <div className="flex justify-center space-x-4">
                    <button className="btn btn-sm rounded" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-info btn-sm rounded" onClick={onConfirm}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}