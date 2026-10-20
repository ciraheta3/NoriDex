import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('shows the staff shell and an explicit empty menu state', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: 'NoriDex', level: 1 })).toBeVisible()
  expect(screen.getByText(/a restaurant menu encyclopedia for staff/i)).toBeVisible()

  const menu = screen.getByRole('region', { name: 'Menu coming soon' })
  expect(within(menu).getByRole('heading', { name: 'Menu coming soon', level: 2 })).toBeVisible()
  expect(within(menu).getByText(/no menu data yet/i)).toBeVisible()
})
