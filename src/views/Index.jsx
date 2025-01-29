import { defineComponent, onMounted, ref } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import BaseCard from '@/components/BaseCard'
import Button from '@/components/Button'
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard'
import ApexCharts from 'apexcharts'

const actions = [
    {
        title: 'Action one',
        to: '#',
    },
    {
        title: 'Action two',
        to: '#',
    },
]

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
                    startIcon="tabler--brand-github"
                    text="Star on github"
                />
            </>
        )
    },
})

export default defineComponent({
    setup() {
        const customersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
        const visitsData = [
            4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13,
        ].reverse()
        const ordersData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]
        const growthData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13]

        const earningChartEl = ref(null)

        const salesChartEl = ref(null)

        onMounted(() => {
            let earningChart = new ApexCharts(earningChartEl.value, {
                series: [30, 70],
                chart: {
                    type: 'donut',
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: { show: false },
                comparedResult: [3, 7],
                labels: ['Sales', ''],
                stroke: { width: 0 },
                colors: ['#a855f7', '#e2e8f0'],
                grid: {
                    padding: {
                        right: -20,
                        bottom: -8,
                        left: -20,
                    },
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                    offsetY: 15,
                                },
                                value: {
                                    offsetY: -20,
                                    formatter(val) {
                                        return `${parseInt(val)}%`
                                    },
                                },
                                total: {
                                    show: true,
                                    label: 'Sales',
                                    formatter() {
                                        return '30%'
                                    },
                                },
                            },
                        },
                    },
                },
            })
            earningChart.render()

            let salesChart = new ApexCharts(salesChartEl.value, {
                series: [
                    {
                        name: 'Sales',
                        data: [31, 40, 28, 51, 42, 109, 100],
                    },
                    {
                        name: 'Revenue',
                        data: [11, 32, 45, 32, 34, 52, 41],
                    },
                ],
                legend: {
                    position: 'top',
                },
                chart: {
                    height: '100%',
                    type: 'area',
                    toolbar: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        left: 0,
                        right: 0,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '1/11/2000',
                        '2/11/2000',
                        '3/11/2000',
                        '4/11/2000',
                        '5/11/2000',
                        '6/11/2000',
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm',
                    },
                },
            })
            salesChart.render()
        })

        return () => (
            <PageWrapper
                v-slots={{ header: () => <Header /> }}
                mainTitle="Dashboard Home"
            >
                {/* Statistics section */}
                <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <h2 class="sr-only">Quick statistics</h2>

                    {/* Customers card  */}
                    <QuiclStatisticsCard
                        icon="tabler--users-group"
                        statusIcon="tabler--trending-up"
                        chartData={customersData}
                        title="Customers"
                        result="12.4k"
                        percentage="32.40%"
                        actions={actions}
                    />

                    {/* Visits card  */}
                    <QuiclStatisticsCard
                        icon="tabler--eye"
                        statusIcon="tabler--trending-down"
                        chartData={visitsData}
                        title="Visits"
                        result="-2.6k"
                        status="danger"
                        percentage="-2.10%"
                        actions={actions}
                    />

                    {/* Orders card  */}
                    <QuiclStatisticsCard
                        icon="tabler--shopping-cart"
                        statusIcon="tabler--minus"
                        chartData={ordersData}
                        title="Orders"
                        result="34.4k"
                        status="warning"
                        percentage="0.60%"
                        actions={actions}
                    />

                    {/* Growth card  */}
                    <QuiclStatisticsCard
                        icon="tabler--chart-pie"
                        statusIcon="tabler--trending-up"
                        chartData={growthData}
                        title="Growth"
                        result="15.6%"
                        percentage="7.20%"
                        actions={actions}
                    />
                </section>

                {/* Sales section */}
                <section class="grid grid-cols-1">
                    <h2 class="sr-only">Sales charts</h2>

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                            <div class="grid grid-cols-2 gap-6">
                                {/* Today's user  */}
                                <BaseCard noHeader bgClasses="bg-purple-500">
                                    <div class="grid grid-cols-1 gap-4 p-2">
                                        <span
                                            aria-hidden="true"
                                            class="iconify h-10 w-10 text-white tabler--user-plus"
                                        ></span>

                                        <div class="grid gap-2">
                                            <p class="text-base font-medium text-green-300">
                                                +1%
                                            </p>
                                            <p class="text-3xl font-medium text-white">
                                                1,210
                                            </p>
                                        </div>

                                        <p class="text-sm font-medium text-white">
                                            Today's Users
                                        </p>
                                    </div>
                                </BaseCard>

                                {/* Today's sales */}
                                <BaseCard noHeader bgClasses="bg-cyan-500">
                                    <div class="grid grid-cols-1 gap-4 p-2">
                                        <span
                                            aria-hidden="true"
                                            class="iconify h-10 w-10 text-white tabler--chart-bar"
                                        ></span>

                                        <div class="grid gap-2">
                                            <p class="text-base font-medium text-green-300">
                                                +4%
                                            </p>
                                            <p class="text-3xl font-medium text-white">
                                                20,350
                                            </p>
                                        </div>

                                        <p class="text-sm font-medium text-white">
                                            Today's Sales
                                        </p>
                                    </div>
                                </BaseCard>
                            </div>

                            {/* Earning card */}
                            <BaseCard noHeader class="grid grid-cols-2">
                                <div class="grid grid-cols-1 gap-4">
                                    <h4 class="text-2xl font-medium">
                                        Earning
                                    </h4>
                                    <p class="text-lg font-medium text-gray-500">
                                        This Month
                                    </p>
                                    <p class="text-base font-medium text-green-400">
                                        +20.5%
                                    </p>
                                    <p class="text-2xl font-medium text-gray-600">
                                        $5070.80
                                    </p>
                                </div>

                                {/* Donut chart */}
                                <div class="flex h-full w-full items-center justify-center">
                                    <div ref={earningChartEl}></div>
                                </div>
                            </BaseCard>
                        </div>

                        {/* Bar chart */}
                        <BaseCard title="Salas Analytics" actions={actions}>
                            <div class="h-full min-h-72 overflow-hidden">
                                <div ref={salesChartEl}></div>
                            </div>
                        </BaseCard>
                    </div>
                </section>
            </PageWrapper>
        )
    },
})
