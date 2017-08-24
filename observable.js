userClicksSearchButton
    .flatMap((searchTerm) => {
        return Rx.Observable.fromPromise(
            $.get('https://api.github.com/users/' + searchTerm)
        );
    })
    .subscribe((response) => {
        renderUser(
            response.login,
            response.html_url,
            response.avatar_url
        );
    });
