import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.content}>
            <div className={s.dialogList}>
                <div className={s.dialog + ' ' + s.activeDialog}>
                    <NavLink to="/dialogs/1"> User 1 </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2"> User 2 </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3"> User 3 </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4"> User 4 </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5"> User 5 </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6"> User 6 </NavLink>
                </div>

            </div>

            <div className={s.messageList}>
                <div className={s.message}> message 1</div>
                <div className={s.message}> message 2</div>
                <div className={s.message}> message 3</div>
                <div className={s.message}> message 4</div>
                <div className={s.message}> message 5</div>
                <div className={s.message}> message 6</div>

            </div>


        </div>
    );
}

