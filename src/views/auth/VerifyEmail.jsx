import { defineComponent, reactive, ref, withModifiers } from 'vue'
import Button from '@/components/Button'
import { RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    const verifyEmailForm = reactive({
      processing: false,
    })

    const verificationLinkSent = ref(false)

    const submit = () => {
      verificationLinkSent.value = true
    }

    return () => (
      <>
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we
          just emailed to you? If you didn't receive the email, we will gladly send you another.
        </div>

        <div class="mb-4 text-sm font-medium text-green-600" v-show={verificationLinkSent.value}>
          A new verification link has been sent to the email address you provided during registration.
        </div>

        <form onSubmit={withModifiers(submit, ['prevent'])}>
          <div class="flex items-center justify-between mt-4">
            <Button type="submit" disabled={verifyEmailForm.processing}>
              Resend Verification Email
            </Button>

            <RouterLink to="#" class="text-sm text-blue-600 hover:underline dark:text-blue-400">
              Log Out
            </RouterLink>
          </div>
        </form>
      </>
    )
  },
})
