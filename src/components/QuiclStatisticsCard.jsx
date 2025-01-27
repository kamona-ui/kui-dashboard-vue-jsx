import { defineComponent, onMounted, ref } from 'vue'
import ApexCharts from 'apexcharts'
import BaseCard from '@/components/BaseCard'

export default defineComponent({
    props: {
        title: String,
        result: [String, Number],
        status: {
            type: String,
            default: 'success',
            validator(value) {
                return ['success', 'warning', 'danger'].includes(value)
            },
        },
        percentage: {
            type: [String, Number],
        },
        actions: {
            type: Array,
            default: [],
        },
        icon: {
            type: String || undefined,
            default: undefined,
        },
        statusIcon: {
            type: String || undefined,
            default: undefined,
        },
        chartData: {
            type: [Array, Object],
            default: () => ({
                data: [],
                categories: [],
            }),
        },
    },

    setup(props, { slots }) {
        const chartEl = ref(null)

        onMounted(() => {
            let chart = new ApexCharts(chartEl.value, {
                series: [
                    {
                        name: props.title,
                        data: props.chartData.data ?? props.chartData,
                    },
                ],
                chart: {
                    height: '100%',
                    width: '100%',
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    sparkline: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                grid: {
                    show: false,
                    padding: {
                        left: 0,
                        right: 0,
                    },
                    xaxis: {
                        lines: {
                            show: false,
                        },
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: props.chartData.categories ?? [
                        '1/11/2000',
                        '2/11/2000',
                        '3/11/2000',
                        '4/11/2000',
                        '5/11/2000',
                        '6/11/2000',
                        '7/11/2000',
                        '8/11/2000',
                        '9/11/2000',
                        '10/11/2000',
                        '11/11/2000',
                        '12/11/2000',
                        '1/11/2001',
                    ],
                    tickAmount: 10,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                title: {
                    show: false,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100],
                    },
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                tooltip: {
                    x: { show: false },
                },
            })

            chart.render()
        })

        return () => (
            <BaseCard
                actions={props.actions}
                v-slots={{
                    header: () => (
                        <div class="flex items-center gap-4">
                            {slots.icon ? (
                                slots.icon({
                                    sizeClasses: 'w-8 h-8 text-primary',
                                })
                            ) : (
                                <span
                                    aria-hidden="true"
                                    class={[
                                        'iconify h-8 w-8 text-primary',
                                        props.icon,
                                    ]}
                                ></span>
                            )}

                            <div class="flex items-center gap-2">
                                <span
                                    aria-hidden="true"
                                    class={[
                                        'iconify h-6 w-6',
                                        props.statusIcon,
                                        {
                                            'text-green-500':
                                                props.status == 'success',
                                            'text-yellow-500':
                                                props.status == 'warning',
                                            'text-red-500':
                                                props.status == 'danger',
                                        },
                                    ]}
                                ></span>

                                <span
                                    class={[
                                        'text-xs font-medium',
                                        {
                                            'text-green-500':
                                                props.status == 'success',
                                            'text-yellow-500':
                                                props.status == 'warning',
                                            'text-red-500':
                                                props.status == 'danger',
                                        },
                                    ]}
                                >
                                    {props.percentage}
                                </span>
                            </div>
                        </div>
                    ),
                }}
            >
                <div class="relative grid grid-cols-2">
                    <div>
                        <h4 class="text-3xl font-semibold">{props.result}</h4>
                        <p class="text-base font-medium text-gray-500">
                            {props.title}
                        </p>
                    </div>
                    <div class="relative flex max-h-16 items-center">
                        <div ref={chartEl}></div>
                    </div>
                </div>
            </BaseCard>
        )
    },
})
