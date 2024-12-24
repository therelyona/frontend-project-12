import ChannelButtonAdd from './ChannelButtonAdd';

const ChannelTitle = ({ openModal, t }) => (
  <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
    <b>{t('channelTitle.title')}</b>
    <ChannelButtonAdd openModal={openModal} t={t} />
  </div>
);

export default ChannelTitle;
