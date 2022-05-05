import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.dialogList}>
                <div className={s.dialog}> User 1 </div>
                <div className={s.dialog}> User 2 </div>
                <div className={s.dialog}> User 3 </div>
                <div className={s.dialog}> User 4 </div>
                <div className={s.dialog}> User 5 </div>
                <div className={s.dialog}> User 6 </div>

            </div>

            <div className={s.messageList}>
                <div className={s.message}> message 1 </div>
                <div className={s.message}> message 2 </div>
                <div className={s.message}> message 3 </div>
                <div className={s.message}> message 4 </div>
                <div className={s.message}> message 5 </div>
                <div className={s.message}> message 6 </div>

            </div>




        </div>
    );
}

