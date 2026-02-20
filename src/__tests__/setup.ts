import { vi } from 'vitest'

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

vi.stubGlobal(
  'IntersectionObserver',
  MockIntersectionObserver as unknown as typeof IntersectionObserver,
)
