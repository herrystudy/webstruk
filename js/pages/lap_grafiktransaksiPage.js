/**
 *
 * Charts
 *
 * Interface.Plugins.Charts page content scripts. Initialized from scripts.js file.
 *
 *
 */

class Charts {
    constructor() {
        // Initialization of the page plugins
        if (typeof Chart === "undefined") {
            console.log("Chart is undefined!");
            return;
        }

        // this._lineChart = null;
        this._areaChart = null;
        // this._scatterChart = null;
        // this._radarChart = null;
        this._polarChart = null;
        this._pieChart = null;
        // this._doughnutChart = null;
        // this._barChart = null;
        // this._horizontalBarChart = null;
        // this._bubbleChart = null;
        // this._roundedBarChart = null;
        // this._horizontalRoundedBarChart = null;
        // this._streamingLineChart = null;
        // this._streamingBarChart = null;
        // this._customTooltipDoughnut = null;
        // this._customTooltipBar = null;
        // this._customLegendBar = null;
        // this._customLegendDoughnut = null;
        // this._smallDoughnutChart1 = null;
        // this._smallDoughnutChart2 = null;
        // this._smallDoughnutChart3 = null;
        // this._smallDoughnutChart4 = null;
        // this._smallDoughnutChart5 = null;
        // this._smallDoughnutChart6 = null;
        // this._smallLineChart1 = null;
        // this._smallLineChart2 = null;
        // this._smallLineChart3 = null;
        // this._smallLineChart4 = null;

        // Standard charts
        // this._initLineChart();
        this._initAreaChart();
        // this._initScatterChart();
        // this._initRadarChart();
        this._initPolarChart();
        this._initPieChart();
        // this._initDoughnutChart();
        // this._initBarChart();
        // this._initHorizontalBarChart();
        // this._initBubbleChart();

        // // Requires chartjs-plugin-rounded-bar.min.js
        // this._initRoundedBarChart();
        // this._initHorizontalRoundedBarChart();

        // // Streaming charts
        // this._initStreamingLineChart();
        // this._initStreamingBarChart();

        // // Customizations
        // this._initCustomTooltipDoughnut();
        // this._initCustomTooltipBar();
        // this._initCustomLegendBar();
        // this._initCustomLegendDoughnut();

        // // Small charts
        // this._initSmallDoughnutCharts();
        // this._initSmallLineCharts();

        this._initEvents();
    }

    _initEvents() {
        // Listening for color change events to update charts
        document.documentElement.addEventListener(
            Globals.colorAttributeChange,
            (event) => {
                // this._lineChart && this._lineChart.destroy();
                // this._initLineChart();

                this._areaChart && this._areaChart.destroy();
                this._initAreaChart();

                // this._scatterChart && this._scatterChart.destroy();
                // this._initScatterChart();

                // this._radarChart && this._radarChart.destroy();
                // this._initRadarChart();

                this._polarChart && this._polarChart.destroy();
                this._initPolarChart();

                this._pieChart && this._pieChart.destroy();
                this._initPieChart();

                // this._doughnutChart && this._doughnutChart.destroy();
                // this._initDoughnutChart();

                // this._barChart && this._barChart.destroy();
                // this._initBarChart();

                // this._horizontalBarChart && this._horizontalBarChart.destroy();
                // this._initHorizontalBarChart();

                // this._bubbleChart && this._bubbleChart.destroy();
                // this._initBubbleChart();

                // this._roundedBarChart && this._roundedBarChart.destroy();
                // this._initRoundedBarChart();

                // this._horizontalRoundedBarChart &&
                //     this._horizontalRoundedBarChart.destroy();
                // this._initHorizontalRoundedBarChart();

                // this._streamingLineChart && this._streamingLineChart.destroy();
                // this._initStreamingLineChart();

                // this._streamingBarChart && this._streamingBarChart.destroy();
                // this._initStreamingBarChart();

                // this._customTooltipDoughnut &&
                //     this._customTooltipDoughnut.destroy();
                // this._initCustomTooltipDoughnut();

                // this._customTooltipBar && this._customTooltipBar.destroy();
                // this._initCustomTooltipBar();

                // this._customLegendBar && this._customLegendBar.destroy();
                // this._initCustomLegendBar();

                // this._customLegendDoughnut &&
                //     this._customLegendDoughnut.destroy();
                // this._initCustomLegendDoughnut();

                // this._smallDoughnutChart1 &&
                //     this._smallDoughnutChart1.destroy();
                // this._smallDoughnutChart2 &&
                //     this._smallDoughnutChart2.destroy();
                // this._smallDoughnutChart3 &&
                //     this._smallDoughnutChart3.destroy();
                // this._smallDoughnutChart4 &&
                //     this._smallDoughnutChart4.destroy();
                // this._smallDoughnutChart5 &&
                //     this._smallDoughnutChart5.destroy();
                // this._smallDoughnutChart6 &&
                //     this._smallDoughnutChart6.destroy();
                // this._initSmallDoughnutCharts();

                // this._smallLineChart1 && this._smallLineChart1.destroy();
                // this._smallLineChart2 && this._smallLineChart2.destroy();
                // this._smallLineChart3 && this._smallLineChart3.destroy();
                // this._smallLineChart4 && this._smallLineChart4.destroy();
                // this._initSmallLineCharts();
            }
        );
    }

    // Transaksi Hari ini
    _initPolarChart() {
        if (document.getElementById("polarChart")) {
            const polarChart = document
                .getElementById("polarChart")
                .getContext("2d");
            this._polarChart = new Chart(polarChart, {
                type: "polarArea",
                options: {
                    plugins: {
                        crosshair: false,
                        datalabels: { display: false },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scale: {
                        ticks: {
                            display: false,
                        },
                    },
                    legend: {
                        position: "bottom",
                        labels: ChartsExtend.LegendLabels(),
                    },
                    tooltips: ChartsExtend.ChartTooltip(),
                },
                data: {
                    datasets: [
                        {
                            label: "Stock",
                            borderWidth: 2,
                            pointBackgroundColor: Globals.primary,
                            borderColor: [
                                Globals.success,
                                Globals.warning,
                                Globals.danger,
                            ],
                            backgroundColor: [
                                "rgba(25, 135, 84 ,0.1)",
                                "rgba(255, 193, 7 ,0.1)",
                                "rgba(220, 53, 69 ,0.1)",
                            ],
                            data: [persen_sukses, persen_proses, persen_gagal],
                        },
                    ],
                    labels: ["Sukses", "Proses", "Gagal"],
                },
            });
        }
    }

    // Grafik transaksi 7 hari terakhir
    _initAreaChart() {
        if (document.getElementById("areaChart")) {
            const areaChart = document
                .getElementById("areaChart")
                .getContext("2d");
            this._areaChart = new Chart(areaChart, {
                type: "line",
                options: {
                    plugins: {
                        crosshair: ChartsExtend.Crosshair(),
                        datalabels: { display: false },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    lineWidth: 1,
                                    color: Globals.separatorLight,
                                    drawBorder: false,
                                },
                                ticks: {
                                    callback: (value, index, values) => {
                                        return new Intl.NumberFormat({
                                            style: "currency",
                                            currency: "",
                                            maximumSignificantDigits: 3,
                                        }).format(value);
                                    },
                                    beginAtZero: true,
                                    // stepSize: 5,
                                    // min: 50,
                                    // max: 70,
                                    padding: 20,
                                    fontColor: Globals.alternate,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: { display: false },
                                ticks: { fontColor: Globals.alternate },
                            },
                        ],
                    },
                    legend: {
                        position: "bottom",
                        labels: ChartsExtend.LegendLabels(),
                    },
                    tooltips: ChartsExtend.ChartTooltip(),
                },
                data: {
                    labels: tanggal,
                    datasets: [
                        {
                            label: "Sukses",
                            data: trx_sukses,
                            borderColor: Globals.success,
                            pointBackgroundColor: Globals.foreground,
                            pointBorderColor: Globals.success,
                            pointHoverBackgroundColor: Globals.success,
                            pointHoverBorderColor: Globals.foreground,
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: true,
                            borderWidth: 2,
                            backgroundColor: "rgba(25, 135, 84 ,0.1)",
                        },
                        {
                            label: "Proses",
                            data: trx_proses,
                            borderColor: Globals.warning,
                            pointBackgroundColor: Globals.foreground,
                            pointBorderColor: Globals.warning,
                            pointHoverBackgroundColor: Globals.warning,
                            pointHoverBorderColor: Globals.foreground,
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: true,
                            borderWidth: 2,
                            backgroundColor: "rgba(255, 193, 7 ,0.1)",
                        },
                        {
                            label: "Gagal",
                            data: trx_gagal,
                            borderColor: Globals.danger,
                            pointBackgroundColor: Globals.foreground,
                            pointBorderColor: Globals.danger,
                            pointHoverBackgroundColor: Globals.danger,
                            pointHoverBorderColor: Globals.foreground,
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: true,
                            borderWidth: 2,
                            backgroundColor: "rgba(220, 53, 69 ,0.1)",
                        },
                    ],
                },
            });
        }
    }

    // Standard pie chart
    _initPieChart() {
        if (document.getElementById("pieChart")) {
            const pieChart = document.getElementById("pieChart");
            this._pieChart = new Chart(pieChart, {
                type: "pie",
                data: {
                    labels: ["Sukses", "Proses", "Gagal"],
                    datasets: [
                        {
                            label: "",
                            borderColor: [
                                Globals.success,
                                Globals.warning,
                                Globals.danger,
                            ],
                            backgroundColor: [
                                "rgba(25, 135, 84 ,0.1)",
                                "rgba(255, 193, 7 ,0.1)",
                                "rgba(220, 53, 69 ,0.1)",
                            ],
                            borderWidth: 2,
                            // data: [15, 25, 20],
                            data: [
                                periode_sukses,
                                periode_proses,
                                periode_gagal,
                            ],
                        },
                    ],
                },
                draw: function () {},
                options: {
                    plugins: {
                        datalabels: { display: false },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                    },
                    layout: {
                        padding: {
                            bottom: 20,
                        },
                    },
                    legend: {
                        position: "bottom",
                        labels: ChartsExtend.LegendLabels(),
                    },
                    tooltips: ChartsExtend.ChartTooltip(),
                },
            });
        }
    }
}
