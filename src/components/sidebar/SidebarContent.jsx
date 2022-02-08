import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/perfect-scrollbar'
import SidebarLink from '@/components/sidebar/SidebarLink'
import { DashboardIcon } from '@/components/icons/outline'
import { ShieldCheckIcon, DocumentIcon } from '@heroicons/vue/outline'
import SidebarCollapsible from '@/components/sidebar/SidebarCollapsible'
import SidebarCollapsibleItem from '@/components/sidebar/SidebarCollapsibleItem'

export default defineComponent({
  setup() {
    const isCurrentRoute = (routeName) => {
      return useRouter().currentRoute.value.name == routeName
    }

    const isCurrentPath = (path) => {
      return useRouter().currentRoute.value.path.startsWith(path)
    }

    return () => (
      <PerfrectScrollbar tagname="nav" aria-label="main" class="relative flex flex-col flex-1 max-h-full gap-4 px-3">
        <SidebarLink
          title="Dashboard"
          to={{ name: 'Dashboard' }}
          active={isCurrentRoute('Dashboard')}
          v-slots={{
            icon: () => <DashboardIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" />,
          }}
        />

        <SidebarCollapsible
          title="Pages"
          v-slots={{ icon: () => <DocumentIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" /> }}
          active={isCurrentPath('/pages')}
        >
          <SidebarCollapsibleItem to={{ name: 'Blank' }} title="Blank" active={isCurrentRoute('Blank')} />
        </SidebarCollapsible>

        <SidebarCollapsible
          title="Authentication"
          v-slots={{ icon: () => <ShieldCheckIcon class="flex-shrink-0 w-6 h-6" aria-hidden="true" /> }}
        >
          <SidebarCollapsibleItem to={{ name: 'Login' }} title="Login" />
          <SidebarCollapsibleItem to={{ name: 'Register' }} title="Register" />
          <SidebarCollapsibleItem to={{ name: 'VerifyEmail' }} title="Verify Email" />
          <SidebarCollapsibleItem to={{ name: 'ForgotPassword' }} title="Forgot Password" />
          <SidebarCollapsibleItem to={{ name: 'ResetPassword' }} title="Reset Password" />
          <SidebarCollapsibleItem to={{ name: 'ConfirmPassword' }} title="Confirm Password" />
        </SidebarCollapsible>
      </PerfrectScrollbar>
    )
  },
})
