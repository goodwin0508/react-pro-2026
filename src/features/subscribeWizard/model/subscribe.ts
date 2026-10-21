export type Step = 'email' | 'confirm' | 'done'

export type SubscribeState = {
  step: Step
  email: string
  error?: string
}

export const initialSubscribeState: SubscribeState = {
  step: 'email',
  email: '',
}

const delay = () => new Promise((resolve) => setTimeout(resolve, 600))

export async function subscribeAction(
  prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  await delay()

  if (prev.step === 'email') {
    const email = String(formData.get('email') ?? '').trim()

    if (!email) {
      return { ...prev, error: 'Укажите email' }
    }
    if (!email.includes('@')) {
      return { ...prev, email, error: 'Email должен содержать @' }
    }

    return { step: 'confirm', email }
  }

  return { step: 'done', email: prev.email }
}
