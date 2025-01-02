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
        this._initBoxedWithMonitor();
        this._initBoxedWithMonitorResponsive();
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
    _initBoxedWithMonitor() {
        var table = jQuery(".data-table-monitor").DataTable({
            ajax: {
                url: api,
                dataSrc: "",
            },

            destroy: true,
            paging: true,
            buttons: ["copy", "excel", "csv", "print", "pdf", "colvis"],
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

            columns: [
                { data: "trxid" },
                { data: "tgl_entri" },
                { data: "tgl_status" },
                { data: "kode_reseller" },
                { data: "nama_reseller" },
                { data: "kode_produk" },
                { data: "tujuan" },
                {
                    data: "harga",
                    render: function (data, type, row) {
                        return (
                            "<div style='text-align: right;'>" + data + "</div>"
                        );
                    },
                },
                {
                    data: "status",
                    render: function (data, type, row) {
                        if (data == "Sukses") {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-success" style="background-color: rgba(67, 155, 56, 0.2);"><b> ' +
                                data +
                                "</b></span>"
                            );
                        } else if (data == "Proses") {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-warning" style="background-color: rgba(235, 183, 26, 0.2);"><b>' +
                                data +
                                "</b></span>"
                            );
                        } else if (
                            data == "Gagal" ||
                            data == "Timeout" ||
                            data == "Tujuan Salah" ||
                            data == "Produk Gangguan" ||
                            data == "Refund"
                        ) {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-danger" style="background-color: rgba(207, 38, 55, 0.2);"><b>' +
                                data +
                                "</b></span>"
                            );
                        }
                    },
                },
                { data: "sn" },
                // { data: "selisih" },
                { data: "supplier_kode" },
                {
                    data: "saldo_supplier",
                    render: function (data, type, row) {
                        return (
                            '<div style="text-align: right;"><span>' +
                            data +
                            "</span></div>"
                        );
                    },
                },
                { data: "jawaban" },
            ],
            deferLoading: 50000,
        });

        setInterval(function () {
            table.ajax.reload(null, false);
        }, 5000);
    }

    // Boxed variation for pagination, hover and stripe examples
    _initBoxedWithMonitorResponsive() {
        var table = jQuery(".data-table-monitorresponsive").DataTable({
            ajax: {
                url: api,
                dataSrc: "",
            },

            destroy: true,
            paging: true,
            buttons: ["copy", "excel", "csv", "print", "pdf", "colvis"],
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

            columns: [
                { data: "trxid" },
                { data: "tgl_entri" },
                { data: "tgl_status" },
                { data: "kode_reseller" },
                { data: "nama_reseller" },
                { data: "kode_produk" },
                { data: "tujuan" },
                {
                    data: "harga",
                    render: function (data, type, row) {
                        return (
                            "<div style='text-align: right;'>" + data + "</div>"
                        );
                    },
                },
                {
                    data: "status",
                    render: function (data, type, row) {
                        if (data == "Sukses") {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-success" style="background-color: rgba(67, 155, 56, 0.2);"><b> ' +
                                data +
                                "</b></span>"
                            );
                        } else if (data == "Proses") {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-warning" style="background-color: rgba(235, 183, 26, 0.2);"><b>' +
                                data +
                                "</b></span>"
                            );
                        } else if (
                            data == "Gagal" ||
                            data == "Timeout" ||
                            data == "Tujuan Salah" ||
                            data == "Produk Gangguan" ||
                            data == "Refund"
                        ) {
                            return (
                                '<div style="text-align: center;"><span class="badge rounded-pill text-danger" style="background-color: rgba(207, 38, 55, 0.2);"><b>' +
                                data +
                                "</b></span>"
                            );
                        }
                    },
                },
                { data: "sn" },
                // { data: "selisih" },
                { data: "supplier_kode" },
                {
                    data: "saldo_supplier",
                    render: function (data, type, row) {
                        return (
                            "<div style='text-align: right;'>" + data + "</div>"
                        );
                    },
                },
                { data: "jawaban" },
            ],
            deferLoading: 50000,
        });

        setInterval(function () {
            table.ajax.reload(null, false);
        }, 5000);
    }

    // Calling extend makes search, page length, print and export work
    _extendDatatables() {
        new DatatableExtend();
    }
}
