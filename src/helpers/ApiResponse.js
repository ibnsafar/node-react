exports.apiresponse = (status, res, message, data) => {
    const constructor = () => {
        this.status = status
        this.res = res;
        this.message = message
    }

    const constructors = () => {
        this.status = status
        this.res = res;
        this.message = message
        this.data = data
    }

    const resdata = {
        success: true,
        message,
        data
    }
    return res.status(status).json(resdata)
}