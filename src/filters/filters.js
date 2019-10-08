import moment from 'moment'

let formatDate = (val, to, from) => {
    if(!val) return;
    val = val.toString();
    // debugger
    return moment(val, from || 'YYYYMMDDHHmmss').format(to);
}

let addApi = (val, to, from) => {
    if(!val) return;
    return {
        backgroundImage: 'url('+ process.env.VUE_APP_SERVER_HOST_PRE + val+')'
    }
}

let imgAddApi = (val, to, from) => {
    if(!val) return;
    return process.env.VUE_APP_SERVER_HOST_PRE + val
}
export { formatDate, addApi, imgAddApi }
