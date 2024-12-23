import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { activeChannelSelector } from '../../store/slices/activeChannelSlice';
import ChannelItem from './ChannelItem';

const DropdownButton = ({ openModal, channel }) => {
  const activeChannel = useSelector(activeChannelSelector);

  return (
    <Dropdown as={ButtonGroup} className="me-2 w-100">
      <ChannelItem channel={channel} />
      <Dropdown.Toggle
        split
        variant={activeChannel.id === channel.id ? 'secondary' : ''}
        id="channelDropdown"
      >
        <span className="visually-hidden">Управление каналом</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => openModal('removing', channel)}>
          Удалить
        </Dropdown.Item>
        <Dropdown.Item onClick={() => openModal('renaming', channel)}>
          Переименовать
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
