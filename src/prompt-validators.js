const validateNotEmpty = function( value ) {
    return ( value.trim().length !== 0 ) ? true : "This field is required";
};

const validateBool = function( value ) {
    var y = new RegExp( /^y(es)?$/i );
    var n = new RegExp( /^no?$/i );

    if ( typeof value !== 'string' ) {
        return value;
    }

    if ( value.match( y ) !== null ) {
        return 'true';
    } else if ( value.match( n ) !== null ) {
        return 'false';
    }

    return value;
};

/*
Not foolproof, but should catch some more common issues with entering hostnames
 */
const parseHostname = function( value ) {
    // Get rid of any http(s):// prefix
    value = value.replace( /^https?:\/\//i, '' );

    // Get rid of any spaces
    value = value.replace( /\s/i, '' );

    let parts = value.split( '/' );

    let hostname = parts[0];

    // Make sure the hostname has a TLD assigned
    if ( hostname.lastIndexOf( '.' ) === -1 ) {
        hostname = hostname + '.test';
    }

    return hostname;
};

module.exports = { validateNotEmpty, validateBool, parseHostname };
