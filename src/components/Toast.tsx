"use client";
import classNames from 'classnames';
import React from 'react'
import { ToastContainer, TypeOptions } from 'react-toastify';


const contextClass: { [key in TypeOptions]: string } = {
    success: 'bg-primary border-white text-white',
    error: 'bg-red-600/40 text-red-600 border-red-600',
    info: 'bg-green/40 text-green border-green',
    warning: 'bg-yellow-400/40 text-yellow-400 border-yellow-400',
    default: 'bg-green/40 text-green border-green',
};

function Close() {
    return (
        <div className='ml-3'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="closedICON" clip-path="url(#clip0_65_1167)">
                    <path id="Vector" d="M18.9973 21.0693C18.7253 21.0693 18.4533 20.9627 18.2453 20.7547L11.312 13.8213C10.896 13.4053 10.896 12.728 11.312 12.312C11.728 11.896 12.4053 11.896 12.8213 12.312L19.7547 19.2453C20.1707 19.6613 20.1707 20.3387 19.7547 20.7547C19.5413 20.9627 19.2693 21.0693 18.9973 21.0693Z" fill="currentColor" />
                    <path id="Vector_2" d="M12.0691 21.0693C12.3411 21.0693 12.6131 20.9627 12.8211 20.7547L19.7544 13.8213C20.1704 13.4053 20.1704 12.728 19.7544 12.312C19.3384 11.896 18.6611 11.896 18.2451 12.312L11.3117 19.2453C10.8957 19.6613 10.8957 20.3387 11.3117 20.7547C11.5251 20.9627 11.7971 21.0693 12.0691 21.0693Z" fill="currentColor" />
                    <path id="Vector_3" d="M16 32C7.17538 32 0 24.8246 0 16C0 7.17538 7.17538 0 16 0C24.8246 0 32 7.17538 32 16C32 24.8246 24.8246 32 16 32ZM16 2.46154C8.53538 2.46154 2.46154 8.53539 2.46154 16C2.46154 23.4646 8.53538 29.5385 16 29.5385C23.4646 29.5385 29.5385 23.4646 29.5385 16C29.5385 8.53539 23.4646 2.46154 16 2.46154Z" fill="currentColor" />
                </g>
                <defs>
                    <clipPath id="clip0_65_1167">
                        <rect width="32" height="32" fill="currentColor" />
                    </clipPath>
                </defs>
            </svg>

        </div>
    )
}

const defaultClassName =
    'pl-5 pr-3 py-6 border-2 backdrop-blur-lg rounded-lg flex flex justify-between items-center mt-4';
export default function Toast() {
    return (
        <ToastContainer
            autoClose={3000}
            closeButton={<Close />}
            position='top-right'
            hideProgressBar={true}
            icon={false}
            draggable={false}
            bodyClassName={() => 'text-lg flex-1 break-all'}
            toastClassName={(context) => {
                const type = context?.type || 'default';
                const className = contextClass[type];
                return classNames(defaultClassName, className);
            }} />
    )
}
