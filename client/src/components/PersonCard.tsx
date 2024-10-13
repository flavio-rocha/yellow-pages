import { FC } from 'react';
import './PersonCard.css';
import { Person } from '../services/searchApi.ts';

interface PersonCardProps {
  props: Person;
}

const PersonCard: FC<PersonCardProps> = ({ props }) => {
  const imgSource = `/src/assets/images/${props.picture}`;

  return (
    <div className={'person-data'}>
      <div>
        <h3>{props.name}</h3>
        <div>Age: {props.age}</div>
        <div>Phone: {props.phoneNumber}</div>
      </div>
      <div className={'person-image'}>
        <img src={imgSource} width={100} height={130} alt={'Image not provided'} />
      </div>
    </div>
  );
};

export default PersonCard;
