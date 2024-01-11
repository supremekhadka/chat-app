import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
           <PrettyChatWindow
                projectId="f6968a80-e435-4614-bc29-ce2538e39a9f"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            /> 
        </div>
    );
}

export default ChatsPage;