import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
         <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='6c64811b-5938-4d9b-ab6d-2f3750b9136a'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
         </div>
    );
};
export default ChatsPage;