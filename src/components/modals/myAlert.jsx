import React from 'react';
import { createRoot } from "react-dom/client";

const myAlert = (message) => {
    const div = document.createElement("div");
    document.body.appendChild(div)
    const root = createRoot(div)

    setTimeout(() => {
        cleanup()
    }, 10000);

    const cleanup = () => {
        root.unmount()
        div.remove()
    }

    root.render(
        <div className='p-2 px-3 bg-white rounded-md text-black w-max fixed top-4 right-4'>
            <h3 className='text-base'>{message}</h3>
        </div>
    )
};

export default myAlert;