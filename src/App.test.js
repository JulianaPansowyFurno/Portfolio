import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Career from './components/Career/Career';
import Skills from './components/Career/Skills';

test('shows CV experience, education and contact', () => {
  render(<MemoryRouter><Career /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: /Mi recorrido/ })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Pasantía en Inteligencia Artificial/ })).toBeInTheDocument();
  expect(screen.getByText(/Universidad Tecnológica Nacional/)).toBeInTheDocument();
  expect(screen.getByText('Escuela ORT')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contactar' })).toHaveAttribute('href', 'mailto:julipansofurno@gmail.com');
});

test('filters journey while retaining all source content for printing', () => {
  render(<MemoryRouter><Career /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: 'Formación' }));
  expect(screen.getByRole('button', { name: 'Formación' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText(/Pasantía en Inteligencia Artificial/).closest('article')).toHaveClass('filtered-out');
  expect(screen.getByText('Escuela ORT').closest('article')).not.toHaveClass('filtered-out');
  fireEvent.click(screen.getByRole('button', { name: 'Todo' }));
  expect(screen.getByText(/Pasantía en Inteligencia Artificial/).closest('article')).not.toHaveClass('filtered-out');
});

test('filters skills and restores all categories', () => {
  render(<Skills />);
  fireEvent.click(screen.getByRole('button', { name: 'Diseño' }));
  expect(screen.getByText('Figma').closest('article')).not.toHaveClass('filtered-out');
  expect(screen.getByText('React').closest('article')).toHaveClass('filtered-out');
  fireEvent.click(screen.getByRole('button', { name: 'Todas' }));
  expect(screen.getByText('React').closest('article')).not.toHaveClass('filtered-out');
});

test('PDF action opens all details and restores them after printing', () => {
  window.print = jest.fn();
  render(<MemoryRouter><Career /></MemoryRouter>);
  const ortDetails = screen.getByText('Escuela ORT').closest('details');
  expect(ortDetails.open).toBe(false);
  fireEvent.click(screen.getByRole('button', { name: 'Guardar CV en PDF' }));
  expect(window.print).toHaveBeenCalledTimes(1);
  expect(ortDetails.open).toBe(true);
  fireEvent(window, new Event('afterprint'));
  expect(ortDetails.open).toBe(false);
});
