import { Person } from '../services/searchApi';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonCard from './PersonCard.tsx';

describe('PersonCard', () => {
  const mockPerson: Person = {
    address: '123 Main St',
    name: 'John Doe',
    age: '35',
    phoneNumber: '123-456-7890',
    picture: 'john_doe.png',
  };

  it('should render person card correctly', () => {
    render(<PersonCard props={mockPerson} />);

    const nameElement = screen.getByText('John Doe');
    expect(nameElement).toBeInTheDocument();

    const ageElement = screen.getByText(/Age: 35/i);
    expect(ageElement).toBeInTheDocument();

    const phoneNumberElement = screen.getByText(/Phone: 123-456-7890/i);
    expect(phoneNumberElement).toBeInTheDocument();

  });
});