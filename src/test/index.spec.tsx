import List from '../components/List';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { PLAYERS } from './fixtures';
import { act } from 'react-dom/test-utils';

describe('List Component', () => {
  beforeEach(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: PLAYERS }));
  });

  it('Should render the headers', () => {
    act(() => {
      render(<List />);
    });
    expect(screen.getByText('Player')).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('Should call axios remove, when push the remove button', async () => {
    jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve('test'));
    act(() => {
      render(<List />);
    });
    await waitFor(() => {
      expect(screen.getByText('Peter')).toBeInTheDocument();
    });
    act(() => {
      const button = screen.getAllByText('Remove');
      fireEvent.click(button[0]);
      expect(axios.delete).toHaveBeenCalled();
    });
  });

  it('Should call axios add, when push the add button', () => {
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve('test'));
    act(() => {
      render(<List />);
    });
    const button = screen.getByText('Add');
    fireEvent.click(button);
    expect(axios.post).toHaveBeenCalled();
  });
});
