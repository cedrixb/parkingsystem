$(document).ready(function () {

    let LCLDB_PARKINGSLOTSDATA = [
        {
            "slotNumber": "1",
            "slotType": "SP",
            "slotDistance": [2, 4, 1]
        },
        {
            "slotNumber": "2",
            "slotType": "MP",
            "slotDistance": [1, 3, 5]
        },
        {
            "slotNumber": "3",
            "slotType": "LP",
            "slotDistance": [3, 6, 2]
        },
        {
            "slotNumber": "4",
            "slotType": "LP",
            "slotDistance": [7, 1, 2]
        },
        {
            "slotNumber": "5",
            "slotType": "SP",
            "slotDistance": [5, 8, 9]
        },
        {
            "slotNumber": "6",
            "slotType": "LP",
            "slotDistance": [8, 7, 3]
        },
        {
            "slotNumber": "7",
            "slotType": "MP",
            "slotDistance": [1, 2, 4]
        },
        {
            "slotNumber": "8",
            "slotType": "MP",
            "slotDistance": [2, 4, 8]
        },
        {
            "slotNumber": "9",
            "slotType": "SP",
            "slotDistance": [7, 6, 5]
        }
    ]

    DT_PARKINGLIST = $('#parkingslots-table').DataTable({
        destroy: true,
        data: LCLDB_PARKINGSLOTSDATA,
        autoWidth: true,
        scrollX: true,
        scrollCollapse: true,
        paging: false,

        columns: [
            { data: 'slotNumber', title: 'Parking Slot Number' },
            { data: 'slotType', title: 'Type' },
            { data: 'slotDistance', title: 'Distance from Entry points' }
        ],
        columnDefs: [
            { targets: [0, 1, 2], className: 'dt-center' }
        ]
    });

});