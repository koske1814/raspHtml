function photo(){
    var xhr = new XMLHttpRequest();
    // ハンドラの登録.
    xhr.onreadystatechange = function() {
        switch ( xhr.readyState ) {
            case 0:
                // 未初期化状態.
                console.log( 'uninitialized!' );
                break;
            case 1: // データ送信中.
                console.log( 'loading...' );
                break;
            case 2: // 応答待ち.
                console.log( 'loaded.' );
                break;
            case 3: // データ受信中.
                console.log( 'interactive... '+xhr.responseText.length+' bytes.' );
                break;
            case 4: // データ受信完了.
                if( xhr.status == 200 || xhr.status == 304 ) {
                    var data = xhr.responseText; // responseXML もあり
                    console.log( 'COMPLETE! :'+data );
                } else {
                    console.log( 'Failed. HttpStatus: '+xhr.statusText );
                }
                break;
        }
    };
    xhr.open('POST',"/photo",false);
    xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xhr.send();
    xhr.abort();
}