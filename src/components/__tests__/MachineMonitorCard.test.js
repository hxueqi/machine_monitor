import React from 'react';
import { render, screen } from '@testing-library/react';
import MachineMonitorCard from '../MachineMonitorCard';

const mockMachine = {
  sitcolor: 'Green',
  matcodecons: 'BOBINA 1',
  matcode: 'MATCODE3',
};

describe('MachineMonitorCard test', () => {
  test('should be displayed content in card - ACTIVE', async () => {
    render(<MachineMonitorCard machine={mockMachine} />);

    expect(await screen.getByText('BOBINA 1'))
      .toBeInTheDocument();
    expect(screen.getByText('MATCODE3'))
      .toBeInTheDocument();
    expect(screen.getByText('ACTIVE'))
      .toBeInTheDocument();
  });

  test('should be displayed content in card - INACTIVE', async () => {
    render(<MachineMonitorCard machine={{ ...mockMachine, sitcolor: 'Red' }} />);

    expect(await screen.getByText('BOBINA 1'))
      .toBeInTheDocument();
    expect(screen.getByText('MATCODE3'))
      .toBeInTheDocument();
    expect(screen.getByText('INACTIVE'))
      .toBeInTheDocument();
  });
});
