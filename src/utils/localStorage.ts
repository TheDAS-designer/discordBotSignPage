export function setStorage(key:any, value:any) {
    if(window.localStorage) {
        if(typeof value === 'object') value = JSON.stringify(value);
        window.localStorage.setItem(key, value);
    }
}

export function getStorage(key:any) {
    let value:any = '';
    if(window.localStorage) {
        value = window.localStorage.getItem(key);
        if(value === '' || value === null) return '';
        try {
            value = JSON.parse(value);
        } catch (e) {
        }
    }
    return value;
}


export function removeStorage(key:any) {
   
    window.localStorage.removeItem(key);    
}


export function batchRemoveStorage(...keys:any[]) {
    if(window.localStorage) {
        keys.map( k => {
            removeStorage(k);
        })
    }
}