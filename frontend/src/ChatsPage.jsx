import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
const ChatsPage = () => {
    const chatProps = useMultiChatLogic(
        '6c64811b-5938-4d9b-ab6d-2f3750b9136a',
         props.user.username, 
         props.user.secrets
    );
    return (
         <div style={{ height: '100vh' }}>
            <MultiChatSocket { ...chatProps } />
            <MultiChatWindow { ...chatProps } style={{ height: '100%' }}/>
         </div>
    );
}
export default ChatsPage;