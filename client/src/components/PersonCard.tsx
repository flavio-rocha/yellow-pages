import { FC } from 'react';
import './PersonCard.css';

interface PersonCardProps {
  props: { picture: string; age: string; name: string; address: string; phoneNumber: string };
}

const PersonCard: FC = ({ props }) => {
  return (
    <div className={'person-data'}>
      <div>
        <h3>{props.name}</h3>
        <div>Age: {props.age}</div>
        <div>Phone: {props.phoneNumber}</div>
      </div>
      <div className={'person-image'}>
        <img src={props.picture} width={100} height={130} />
      </div>
    </div>
  );
};

export default PersonCard;