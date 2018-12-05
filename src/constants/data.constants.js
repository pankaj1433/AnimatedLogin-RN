export const ORDER_STATUS = {
    inProgress: 'In progress',
    completed: 'Completed',
    cancel: 'Canceled',
    pickUp: 'Picked Up'
}

export const ORDER_LIST = [
    {
        order_id : '1',
        order_status: ORDER_STATUS.pickUp,
        date: 1529178913276,
        orderDetails: {
            storeName: 'Haldiram',
            location: 'Akshardham metro station',
            orderItems: [
                {name: 'Pizza', quantity: 1},
                {name: 'Burger', quantity: 2},
                {name: 'Coke', quantity: 2},
            ]
        },
        customerDetail : {
            name: 'John Doe',
            address: 'F 124, Main Market, Delhi',
        }
    },
    {
        order_id : '2',
        order_status: ORDER_STATUS.inProgress,
        date: 1529179324616,
        orderDetails: {
            storeName: 'Haldiram',
            location: 'Akshardham metro station',
            orderItems: [
                {name: 'Pizza', quantity: 1},
                {name: 'Burger', quantity: 2},
                {name: 'Coke', quantity: 2},
            ]
        },
        customerDetail : {
            name: 'Johnny Doe',
            address: 'X 124, Main Market, Delhi',
        }
    },
    {
        order_id : '3',
        order_status: ORDER_STATUS.cancel,
        date: 1529179313588,
        orderDetails: {
            storeName: 'Haldiram',
            location: 'Akshardham metro station',
            orderItems: [
                {name: 'Pizza', quantity: 1},
                {name: 'Burger', quantity: 2},
                {name: 'Coke', quantity: 2},
            ]
        },
        customerDetail : {
            name: 'Janie Doe',
            address: 'C 124, Main Market, Delhi',
        }
    },
    {
        order_id : '4',
        order_status: ORDER_STATUS.completed,
        date: 1529179293858,
        orderDetails: {
            storeName: 'Haldiram',
            location: 'Akshardham metro station',
            orderItems: [
                {name: 'Pizza', quantity: 1},
                {name: 'Burger', quantity: 2},
                {name: 'Coke', quantity: 2},
            ]
        },
        customerDetail : {
            name: 'Baby Doe',
            address: 'B 124, Main Market, Delhi',
        }
    },
    {
        order_id : '5',
        order_status: ORDER_STATUS.completed,
        date: 1529179280940,
        orderDetails: {
            storeName: 'Haldiram',
            location: 'Akshardham metro station',
            orderItems: [
                {name: 'Pizza', quantity: 1},
                {name: 'Burger', quantity: 2},
                {name: 'Coke', quantity: 2},
            ]
        },
        customerDetail : {
            name: 'Richard Roe',
            address: 'A 124, Main Market, Delhi',
        }
    },
]