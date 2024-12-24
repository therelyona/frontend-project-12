import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { activeChannelSelector } from '../../store/slices/activeChannelSlice';
import ChannelItem from './ChannelItem';

const DropdownButton = ({ openModal, channel, t }) => {
  const activeChannel = useSelector(activeChannelSelector);

  return (
    <Dropdown as={ButtonGroup} className="me-2 w-100">
      <ChannelItem channel={channel} />
      <Dropdown.Toggle
        split
        variant={activeChannel.id === channel.id ? 'secondary' : ''}
        id="channelDropdown"
      >
        <span className="visually-hidden">{t('dropdownButton.description')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => openModal('removing', channel)}>
          {t('dropdownButton.removeButton')}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => openModal('renaming', channel)}>
          {t('dropdownButton.renameButton')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
