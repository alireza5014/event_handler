class MyEvent {
    constructor() {
        this._list = []
        this.eventsCallbacks = {}

    }

    on(event, callback) {
        this.eventsCallbacks[event] = callback

    }


    off(event) {
        this.eventsCallbacks[event] = null

    }

    emit(event, data) {

        if (this.eventsCallbacks[event]) {
            this.eventsCallbacks[event](data)
        }
    }
    emitOnce(event, data) {

        if (this.eventsCallbacks[event]) {
            this.eventsCallbacks[event](data)
            this.eventsCallbacks[event] = null
        }
    }
}

export  default  MyEvent