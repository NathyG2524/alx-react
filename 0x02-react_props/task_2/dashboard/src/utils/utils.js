
export function getFullYear() {
    let today = new Date();

    return(today.getFullYear())
}

export  function getFooterCopy (isIndex) {
    if (isIndex) {
        return ("Holberton School")
    }
    else{
        return ("Holberton School main dashboard")
    }
}

export function getLatestNotification(){
    return {__html:'<strong>Urgent requirement</strong> - complete by EOD'}
  }