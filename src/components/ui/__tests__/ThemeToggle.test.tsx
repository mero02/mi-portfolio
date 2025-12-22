import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('ThemeToggle', () => {
  test('renderiza el botón de tema', () => {
    renderWithTheme(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('muestra el ícono correcto para tema claro', () => {
    renderWithTheme(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toContainHTML('🌙');
  });

  test('cambia el ícono cuando se hace clic', () => {
    renderWithTheme(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    
    // Estado inicial (claro)
    expect(button).toContainHTML('🌙');
    
    // Hacer clic para cambiar a oscuro
    fireEvent.click(button);
    expect(button).toContainHTML('☀️');
  });

  test('togglea el tema correctamente', () => {
    renderWithTheme(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    
    // Verificar estado inicial
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Cambiar a tema oscuro
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Cambiar de vuelta a tema claro
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});