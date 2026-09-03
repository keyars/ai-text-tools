import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('TextLab', () => {
  it('renders the AI workbench', () => {
    render(<App />)
    expect(screen.getAllByText('TEXT//LAB').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: /Run summarize/i })).toBeInTheDocument()
  })
})
