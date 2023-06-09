import React from 'react';
import { SupportMessage } from "types/database";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/fr';

interface SupportItemProps {
    message: SupportMessage;
}

export const SupportItem = ({ message }: SupportItemProps) => {
    dayjs.locale('fr');
    dayjs.extend(relativeTime);

    return <div className='w-full bg-lightgrey-100 flex rounded-md justify-between items-center py-[6px] px-2 cursor-pointer hover:bg-darkgrey-72'>
        <div>
            <h1 className='text-body-r font-medium text-white-100'>{message.subject}</h1>
            <span className='text-body-s text-white-48'>{dayjs(message.created_at).fromNow()}</span>
        </div>
        <i className='fi fi-rr-caret-right text-xl'></i>
    </div>;
};