const checkIP = (ip) => {
    const IPPattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ip.match(IPPattern) ? true : false;
}

export default checkIP
