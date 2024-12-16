import { useSelector } from 'react-redux';
import useActiveChannel from '../../hooks/useActiveChannel';
import { activeChannelSelector } from '../../store/slices/activeChannelSlice';
import ChannelTitle from './ChannelTitle';
import Loading from '../Pages/Loading';
import ChannelItem from './ChannelItem';

const ChannelList = () => {
  const activeChannel = useSelector(activeChannelSelector);
  const { channels, isLoading } = useActiveChannel(activeChannel);

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <ChannelTitle />
      <ul
        id="channels-box"
        className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
      >
        {isLoading && <Loading />}
        {channels?.map((channel) => (
          <li className="nav-item w-100" key={channel.id}>
            <ChannelItem channel={channel} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
