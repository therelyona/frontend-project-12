import ChannelList from './ChannelList';

const ChatContainer = () => (
  <div className="container h-100 my-4 overflow-hidden rounded shadow">
    <div className="row h-100 bg-white flex-md-row">
      <ChannelList />
    </div>
  </div>
);

export default ChatContainer;
