function setCookie(name, value, expiresDays){
    let encodeName = encodeURIComponent(name);
    let encodeValue = encodeURIComponent(value);

    let date = new Date(Date.now() + 86400e3 * expiresDays);
    date = date.toUTCString();

    document.cookie = `${encodeName}=${encodeValue}, expires=${date}`;
}

setCookie("username", "John Doe", 30);
console.log(document.cookie);
