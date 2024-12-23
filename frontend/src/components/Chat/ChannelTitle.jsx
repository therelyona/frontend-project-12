import ChannelButtonAdd from './ChannelButtonAdd';

const ChannelTitle = ({ openModal }) => (
  <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
    <b>Каналы</b>
    <ChannelButtonAdd openModal={openModal} />
  </div>
);

export default ChannelTitle;
