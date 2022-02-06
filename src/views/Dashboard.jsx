import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import Button from '@/components/Button'
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard'
import { GithubIcon } from '@/components/icons/brands'
import { UserGroupIcon, EyeIcon, ShoppingCartIcon, ChartPieIcon } from '@heroicons/vue/outline'

const Header = defineComponent({
  setup() {
    return () => (
      <>
        <h2 class="text-xl font-semibold leading-tight">Dashboard</h2>

        <Button
          target="_blank"
          href="https://github.com/kamona-ui/kui-dashboard-vue-jsx"
          variant="black"
          class="max-w-sm justify-center gap-2"
        >
          {({ iconSizeClasses }) => (
            <>
              <GithubIcon aria-hidden="true" class={iconSizeClasses} />
              <span>Star on Github</span>
            </>
          )}
        </Button>
      </>
    )
  },
})

export default defineComponent({
  setup() {
    const customersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
    const visitsData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13].reverse()
    const ordersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
    const growthData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]

    return () => (
      <PageWrapper v-slots={{ header: () => <Header /> }} mainTitle="Dashboard Home">
        {/* Statistics section */}
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <h2 class="sr-only">Quick statistics</h2>

          {/* Customers card  */}
          <QuiclStatisticsCard
            v-slots={{
              icon: ({ sizeClasses }) => <UserGroupIcon aria-hidden="true" class={sizeClasses} />,
            }}
            chartData={customersData}
            title="Customers"
            result="12.4k"
            percentage="32.40%"
          />

          {/* Visits card  */}
          <QuiclStatisticsCard
            v-slots={{
              icon: ({ sizeClasses }) => <EyeIcon aria-hidden="true" class={sizeClasses} />,
            }}
            chartData={visitsData}
            title="Visits"
            result="-2.6k"
            status="danger"
            percentage="-2.10%"
          />

          {/* Orders card  */}
          <QuiclStatisticsCard
            v-slots={{
              icon: ({ sizeClasses }) => <ShoppingCartIcon aria-hidden="true" class={sizeClasses} />,
            }}
            chartData={ordersData}
            title="Orders"
            result="34.4k"
            status="warning"
            percentage="0.60%"
          />

          {/* Growth card  */}
          <QuiclStatisticsCard
            v-slots={{
              icon: ({ sizeClasses }) => <ChartPieIcon aria-hidden="true" class={sizeClasses} />,
            }}
            chartData={growthData}
            title="Growth"
            result="15.6%"
            percentage="7.20%"
          />
        </section>

        <section>
          <h2 class="text-2xl text-red-400 animate-pulse">Still in design phase, Will be available soon.</h2>
        </section>
      </PageWrapper>
    )
  },
})
