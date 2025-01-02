/**
 *
 * BoxedVariations
 *
 * Interface.Plugins.Datatables.BoxedVariations page content scripts. Initialized from scripts.js file.
 *
 *
 */

class BoxedVariations {
    constructor() {
        if (!jQuery().DataTable) {
            console.log("DataTable is null!");
            return;
        }

        this._dataTableScroll = null;

        this._initBoxedWithScrollbar();
        this._initBoxedWithStandard();
        this._initBoxedWithStandardResponsive();
        this._extendDatatables();
    }

    // Boxed variation with scrollbar
    _initBoxedWithScrollbar() {
        const _this = this;
        jQuery(".data-table-scrollable").DataTable({
            destroy: true,
            paging: false,
            buttons: ["copy", "excel", "csv", "print", "pdf", "colvis"],
            columnDefs: [
                // Adding Name content as an anchor with a target #
                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        return (
                            '<a class="list-item-heading body" href="#">' +
                            data +
                            "</a>"
                        );
                    },
                },
            ],
            sDom: '<"row"<"col-sm-12"<"table-container"t>ir>><"row"<"col-12"p>>',
            responsive: true,
            scrollY: "100%",
            scrollCollapse: !0,
            fnInitComplete: function () {
                _this._dataTableScroll = OverlayScrollbars(
                    document.querySelectorAll(".dataTables_scrollBody"),
                    {
                        scrollbars: { autoHideDelay: 300 },
                        overflowBehavior: { x: "hidden", y: "scroll" },
                    }
                );
            },
        });
    }

    // Boxed variation for pagination, hover and stripe examples
    _initBoxedWithStandard() {
        jQuery(".data-table-standard").DataTable({
            destroy: true,
            paging: true,
            buttons: ["copy", "excel", "csv", "print", "colvis"],
            length: 10,
            columnDefs: [
                // Adding Name content as an anchor with a target #
                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        return (
                            '<a class="list-item-heading body" href="#">' +
                            data +
                            "</a>"
                        );
                    },
                },
            ],
            sDom: '<"row"<"col-sm-12"<"table-container"t>ir>><"row"<"col-12"p>>',
            scrollX: true,
            // responsive: true,
            language: {
                paginate: {
                    previous: '<i class="cs-chevron-left"></i>',
                    next: '<i class="cs-chevron-right"></i>',
                },
            },

            drawCallback: function () {
                var api = this.api();
                var sum = 0;
                var formated = 0;
                //to show first th
                $(api.column(0).footer()).html("TOTAL");

                for (var i = 6; i <= 8; i++) {
                    sum = api
                        .column(i, {
                            page: "current",
                        })
                        .data()
                        .sum();

                    //to format this sum
                    formated = parseFloat(sum).toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                    });
                    $(api.column(i).footer()).html(formated);
                }
            },
        });
    }

    // Boxed variation for pagination, hover and stripe examples
    _initBoxedWithStandardResponsive() {
        jQuery(".data-table-standardresponsive").DataTable({
            destroy: true,
            paging: true,
            buttons: ["copy", "excel", "csv", "print", "colvis"],
            length: 10,
            columnDefs: [
                // Adding Name content as an anchor with a target #
                {
                    targets: 0,
                    render: function (data, type, row, meta) {
                        return (
                            '<a class="list-item-heading body" href="#">' +
                            data +
                            "</a>"
                        );
                    },
                },
            ],
            sDom: '<"row"<"col-sm-12"<"table-container"t>ir>><"row"<"col-12"p>>',
            // scrollX: true,
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="cs-chevron-left"></i>',
                    next: '<i class="cs-chevron-right"></i>',
                },
            },

            drawCallback: function () {
                var api = this.api();
                var sum = 0;
                var formated = 0;
                //to show first th
                $(api.column(0).footer()).html("TOTAL");

                for (var i = 6; i <= 8; i++) {
                    sum = api
                        .column(i, {
                            page: "current",
                        })
                        .data()
                        .sum();

                    //to format this sum
                    formated = parseFloat(sum).toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                    });
                    $(api.column(i).footer()).html(formated);
                }
            },
        });
    }

    // Calling extend makes search, page length, print and export work
    _extendDatatables() {
        new DatatableExtend();
    }
}
