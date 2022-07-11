$(document).ready(function () {

    let parkingInfo;

    let vehicleTypes = [
        {
            "size": "small"
        },
        {
            "size": "medium"
        },
        {
            "size": "large"
        }
    ]

    let entryPoints = [
        {
            "entryPoint": "A"
        },
        {
            "entryPoint": "B"
        },
        {
            "entryPoint": "C"
        }
    ]

    let parkingSlotData = [
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
    $('#park-car-form select[name=vehicleType]').html(createDropdownCar(vehicleTypes));
    $('#park-car-form select[name=vehicleType]').off('change');

    $('#park-car-form select[name=entryPoint]').html(createDropdownEntryPoint(entryPoints));
    $('#park-car-form select[name=entryPoint]').off('change');

    $('#btnParkCar').click(function (e) {
        e.preventDefault();

        let availableSlot;
        let data = $('#park-car-form').serializeObject();

        // checking of vehicle type, entry points to determine slot to be assigned
        if (data.vehicleType == "small") {

            var mappedSlots = parkingSlotData.map(function (item) {

                if (data.entryPoint == "A") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[0]
                    };
                } else if (data.entryPoint == "B") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[1]
                    };
                } else {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[2]
                    };
                }

            });

            Array.prototype.hasMin = function (attrib) {
                return (this.length && this.reduce(function (prev, curr) {
                    return prev[attrib] < curr[attrib] ? prev : curr;
                })) || null;
            }

            availableSlot = (mappedSlots.hasMin('slotDistance'))
            $('#park-car-form input[name=availableSlot]').val(`Slot number ${availableSlot.slotNumber} - distance from entry point ${data.entryPoint} is ${availableSlot.slotDistance} meter/s (closest to entry point)`);

        } else if (data.vehicleType == "medium") {
            let parkingSlotsVehicle = parkingSlotData.filter(item => item.slotType == "MP" || item.slotType == "LP");

            var mappedSlots = parkingSlotsVehicle.map(function (item) {

                if (data.entryPoint == "A") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[0]
                    };
                } else if (data.entryPoint == "B") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[1]
                    };
                } else {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[2]
                    };
                }

            });

            Array.prototype.hasMin = function (attrib) {
                return (this.length && this.reduce(function (prev, curr) {
                    return prev[attrib] < curr[attrib] ? prev : curr;
                })) || null;
            }

            availableSlot = (mappedSlots.hasMin('slotDistance'))
            $('#park-car-form input[name=availableSlot]').val(`Slot number ${availableSlot.slotNumber} - distance from entry point ${data.entryPoint} is ${availableSlot.slotDistance} meter/s (closest to entry point)`);

        } else {
            let parkingSlotsVehicle = parkingSlotData.filter(item => item.slotType == "LP");

            var mappedSlots = parkingSlotsVehicle.map(function (item) {

                if (data.entryPoint == "A") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[0]
                    };
                } else if (data.entryPoint == "B") {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[1]
                    };
                } else {
                    return {
                        slotNumber: item.slotNumber,
                        slotDistance: item.slotDistance[2]
                    };
                }

            });

            Array.prototype.hasMin = function (attrib) {
                return (this.length && this.reduce(function (prev, curr) {
                    return prev[attrib] < curr[attrib] ? prev : curr;
                })) || null;
            }

            availableSlot = (mappedSlots.hasMin('slotDistance'))
            $('#park-car-form input[name=availableSlot]').val(`Slot number ${availableSlot.slotNumber} - distance from entry point ${data.entryPoint} is ${availableSlot.slotDistance} meter/s (closest to entry point)`);

        }

        parkingInfo = {
            plateNumber: data.plateNumber,
            vehicleType: data.vehicleType,
            entryPoint: data.entryPoint,
            availableSlotNumber: availableSlot.slotNumber
        }

    });

    $('#btnSaveParkingInfo').click(function (e) {
        alert("Simulating Saving process demo... saved!");
        window.location.reload();
    });

    function createDropdownCar(data) {
        let code = `<option value="blank">-- SELECT CAR SIZE --</option>`;

        for (let i in data) {
            code += `<option value="${data[i].size}"> ${data[i].size} </option>`;
        }

        return code;
    }

    function createDropdownEntryPoint(data) {
        let code = `<option value="blank">-- SELECT ENTRY POINT --</option>`;

        for (let i in data) {
            code += `<option value="${data[i].entryPoint}"> ${data[i].entryPoint} </option>`;
        }

        return code;
    }

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }

});