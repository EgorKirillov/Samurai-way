import React from 'react';
import s from './ProfileInfo.module.css'

export const PropfileInfo = () => {

    return (
        <div>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Moench_2339.jpg/1200px-Moench_2339.jpg'}
                alt={'mountain image'}/>
            <div  className={s.discritpionInfo}>ava + description</div>
        </div>
    );
};

