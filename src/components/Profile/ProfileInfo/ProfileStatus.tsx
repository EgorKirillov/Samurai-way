import React, {useState} from 'react';

// 71 lesson on React Class Component
/*
class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    statusText = "my status"
    
    activateEditMode = () => {
        this.setState({editMode: true})
        // this.state.editMode=true
        //this.forceUpdate() // не применять!!
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input type="text" autoFocus={true} onBlur={this.deactivateEditMode} value={this.statusText}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.statusText}</span>
                    </div>}
            </div>
        );
    }
};

*/


const ProfileStatus = () => {
    const statusText = "my status"
    const [editMode, setEditMode] = useState<boolean>(false)
    
    return (
        <div>
                {editMode ?
                    <div>
                        <input type="text" autoFocus={true} onBlur={()=>{setEditMode(false)}} value={statusText}/>
                    </div>
                    : <div>
                        <span onDoubleClick={()=>{setEditMode(true)}}>{statusText}</span>
                    </div>}
            </div>
    );
};

export default ProfileStatus;