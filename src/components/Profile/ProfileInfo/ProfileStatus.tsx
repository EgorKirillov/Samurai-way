import React, { ChangeEvent } from 'react'

type ProfileStatusProps = {
  statusText: string
  updateStatus: (statusText: string) => void
}
// 71 lesson on React Class Component

class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false,
    status: this.props.statusText,
  }
  componentDidUpdate(
    prevProps: Readonly<ProfileStatusProps>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (prevProps.statusText !== this.props.statusText) {
      this.setState({ status: this.props.statusText })
    }
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value })
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }
  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              type='text'
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.statusText || '--*--'}</span>
          </div>
        )}
      </div>
    )
  }
}

/*const ProfileStatus = (props: ProfileStatusProps) => {
    const [statusText, setStatusText] = useState<string>(props.statusText)
    const [editMode, setEditMode] = useState<boolean>(false)
    //useEffect(()=>{setStatusText()},[])
    
    const changeStatus = () => {
        setEditMode(false)
        props.updateStatus(statusText)
    }
    
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value)
    }
    return (
        <div>
            {editMode ?
                <div>
                    <input type="text" autoFocus={true} onBlur={changeStatus} value={statusText}
                           onChange={(e) => onChangeHandler(e)}/>
                </div>
                : <div>
                        <span onDoubleClick={() => {
                            setEditMode(true)
                        }}>
                            props.statusText:{props.statusText}
                            {/!*{statusText ? statusText : "---"}*!/}
                        </span>
                </div>}
        </div>
    );
};*/

export default ProfileStatus
