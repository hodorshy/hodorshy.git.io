window.onload = function () {

    window.setTimeout( function () {
        window.onfocus = function () {
            let loading = document.querySelector( '.loading' );
            loading.classList.add( 'active' );
            window.setTimeout( function () {
                loading.classList.remove( 'active' );
                document.querySelector( '#t' ).innerHTML = '完成了';
            }, 1000 );
        }
    }, 1000 );
};
